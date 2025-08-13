import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResults, clearResults } from "../../store/searchSlice";

export function SearchSuggestion() {
  const [query, setQuery] = useState("");
  const [showSugg, setShowSugg] = useState(false);
  const results = useSelector((state: any) => state.search.results);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) {
      dispatch(clearResults());
      return;
    }
    const controller = new AbortController();

    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:8000/api/suggestion?q=${encodeURIComponent(query)}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        dispatch(setResults(data));
        console.log("data now set:", data);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
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
        onChange={(e) =>setQuery(e.target.value)}
        onFocus={() => setShowSugg(true)}
        onBlur={() => setShowSugg(false)}
      />

      {/* Suggestion dropdown */}
      {showSugg && results.length > 0 && (
        <ul className="absolute left-0 right-0 mt-3 bg-white border border-gray-300 rounded shadow-lg z-50 px-2 py-2">
          {results.slice(0, 8).map((item: { id: string; name: string }) => (
            <li
              key={item.id}
              className="flex items-center gap-2 px-4 py-1 cursor-pointer hover:bg-gray-100 text-sm"
              onMouseDown={() => setQuery(item.name)}
            >
              <Search className="h-4 w-4 text-muted-foreground" />
              {item.name}
            </li>
          ))}
        </ul>
      )}

    </div>
  );

}
