import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResults, setLoading, clearResults } from "../../store/searchSlice";

export function SearchSuggestion() {
  const [query, setQuery] = useState("");
  const results = useSelector((state: any) => state.search.results);
  const loading = useSelector((state: any) => state.search.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) {
      dispatch(clearResults());
      return;
    }
    const controller = new AbortController();

    async function fetchData() {
      dispatch(setLoading(true));
      try {
        const res = await fetch(`http://localhost:8000/api/amazon?q=${query}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        dispatch(setResults(data));
        console.log("data now set:", data);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      } finally {
        dispatch(setLoading(false));
      }
    }

    fetchData();
    return () => controller.abort();
  }, [query, dispatch]);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search products"
        className="pl-10 pr-4 bg-input-background border-border"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
