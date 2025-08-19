import { getJson } from "serpapi";

export async function searchGoogle(params) {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([_, v]) => v != null && v !== "")
  );
  return new Promise((resolve, reject) => {
    getJson({
        engine: "google_shopping",
        ...filteredParams,
        api_key: process.env.SERPAPI_KEY
    }, (json) => {
        if (!json.shopping_results) {
            return reject(new Error("No results from Google Shopping"));
        }

        resolve(json);
    });
  });
}