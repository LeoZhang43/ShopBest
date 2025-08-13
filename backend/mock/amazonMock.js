import fs from "fs/promises";
import path from "path";

const __dirname = path.resolve();

export async function searchAmazon() {
  const filePath = path.join(__dirname, "./data/amazonRawData.json");

  // Simulate latency (100–200ms)
  const delay = Math.floor(Math.random() * 100) + 100;
  await new Promise(resolve => setTimeout(resolve, delay));

  // Read and parse file
  const json = await fs.readFile(filePath, "utf8");
  const jsonData = JSON.parse(json);

  // Transform data
  const result = jsonData.organic_results?.map(item => ({
    id: item.asin,
    name: item.title,
    price: item.price,
    rating: item.rating,
    image: item.thumbnail,
    platform: "Amazon",
    platformLogo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanpng.com%2Ffree%2Famazon-logo.html&psig=AOvVaw0f3L8e32jc0e3z4dORJ7d9&ust=1755132460450000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJDr7I_Iho8DFQAAAAAdAAAAABAL",
  })) || [];

  return result;
}
