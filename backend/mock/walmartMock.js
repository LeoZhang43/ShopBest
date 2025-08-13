import fs from "fs/promises";
import path from "path";

const __dirname = path.resolve();

export async function searchWalmart() {
  const filePath = path.join(__dirname, "./data/walmartRawData.json");

  // Simulate latency (100–200ms)
  const delay = Math.floor(Math.random() * 100) + 100;
  await new Promise(resolve => setTimeout(resolve, delay));

  // Read and parse file
  const json = await fs.readFile(filePath, "utf8");
  const jsonData = JSON.parse(json);

  // Transform data
  const result = jsonData.organic_results?.map(item => ({
    id: item.product_id,
    name: item.title,
    price: item.primary_offer.min_price,
    originalPrice: item.primary_offer.offer_price,
    rating: item.rating,
    image: item.thumbnail,
    platform: "Walmart",
    platformLogo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrandcenter.walmart.com%2Fbrand%2Fbrand-identity%2Fwordmark&psig=AOvVaw3DVuj9jvW82KyMlag1509a&ust=1755132512737000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDZvqnIho8DFQAAAAAdAAAAABAE",
  })) || [];

  return result;
}
