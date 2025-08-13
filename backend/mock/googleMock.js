import fs from "fs/promises";
import path from "path";

const __dirname = path.resolve();

export async function searchGoogle() {
  const filePath = path.join(__dirname, "./data/googleShoppingRawData.json");

  // Simulate latency (100–200ms)
  const delay = Math.floor(Math.random() * 100) + 100;
  await new Promise(resolve => setTimeout(resolve, delay));

  // Read and parse file
  const json = await fs.readFile(filePath, "utf8");
  const jsonData = JSON.parse(json);

  // Transform data
  const result = jsonData.shopping_results?.map(item => ({
    id: item.product_id,
    name: item.title,
    price: item.price,
    rating: item.rating,
    image: item.thumbnail,
    platform: item.source,
    platformLogo: item.source_icon,
  })) || [];

  return result;
}
