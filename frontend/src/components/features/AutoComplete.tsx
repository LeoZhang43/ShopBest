import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { setQuery, resetSearchState } from '../../store/searchSlice';
import { resetFilter } from '../../store/filterSlice';
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from '@tanstack/react-query';

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

async function fetchSuggestions(query: string) {
  if (!query) return [];
  const res = await fetch(`http://localhost:8000/api/suggestion?q=${encodeURIComponent(query)}`);
  const data = await res.json();
  return data.slice(0, 8);
}

export function AutoCompletion() {
  const query = useSelector((state: any) => state.search.search_parameters.q);
  const dispatch = useDispatch();
  const debouncedQuery = useDebounce(query, 300);

  const { data: options = [] } = useQuery({
    queryKey: ['suggestions', debouncedQuery],
    queryFn: () => fetchSuggestions(debouncedQuery),
    enabled: !!debouncedQuery,
    staleTime: 5 * 60 * 1000,
  });

  const onChange = (value: string) => {
    dispatch(resetSearchState());
    dispatch(resetFilter());
    dispatch(setQuery(value));
  };
  const onSearch = (value: string) => {
    dispatch(resetSearchState());
    dispatch(resetFilter());
    dispatch(setQuery(value));
  };
  const onSelect = (_value: string, option: any) => {
    dispatch(resetSearchState());
    dispatch(resetFilter());
    dispatch(setQuery(option.label));
  };

  return (
    <AutoComplete
      options={options}
      style={{ width: 400 }}
      onChange={onChange}
      onSelect={onSelect}
      onSearch={onSearch}
      value={query}
    >
      <Input
        placeholder="Search products"
        className="rounded-full shadow-md h-10"
      />
    </AutoComplete>
  );
}
