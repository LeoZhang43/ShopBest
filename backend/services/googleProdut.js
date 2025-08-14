import { getJson } from "serpapi";

export async function searchGoogle(query) {
  return new Promise((resolve, reject) => {
    getJson({
        engine: "google_shopping",
        q: query,
        api_key: process.env.SERPAPI_KEY
    }, (json) => {
        if (!json.shopping_results) {
            return reject(new Error("No results from Google Shopping"));
        }
        const results = json.shopping_results.map(item => ({
            id: item.product_id,
            name: item.title,
            price: item.price,
            rating: item.rating,
            image: item.thumbnail,
            platform: item.source,
            platformLogo: item.source_icon,
        }));

        resolve(json);
    });
  });
}