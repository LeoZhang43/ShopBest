import { getJson } from "serpapi";

export async function autoComplete(query) {
  return new Promise((resolve, reject) => {
    getJson({
        engine: "google_autocomplete",
        q: query,
        api_key: process.env.SERPAPI_KEY
    }, (json) => {
        if (!json.suggestions) {
            return reject(new Error("No results from Google Auto Complete"));
        }
        const results = json.suggestions.map((item, index) => ({
            label: item.value,
            value: index,
        }));

        resolve(results);
    });
  });
}