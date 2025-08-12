import { getJson } from "serpapi";

export async function searchAmazon(query) {
  return new Promise((resolve, reject) => {
    getJson({
      engine: "amazon",
      k: query,
      amazon_domain: "amazon.com",
      api_key: process.env.SERPAPI_KEY
    }, (json) => {

      if (!json.organic_results) {
        return reject(new Error("No results from Amazon"));
      }
      console.log(json);
      const results = json.organic_results.map(item => ({
        id: item.asin,
        name: item.title,
        price: item.extracted_price,
        rating: item.rating,
        image: item.thumbnail,
      }));

      resolve(results);
    });
  });
}