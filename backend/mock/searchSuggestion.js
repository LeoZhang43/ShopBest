import fs from "fs/promises";
import path from "path";

const __dirname = path.resolve();

export async function searchSuggestions() {
  const filePath = path.join(__dirname, "./data/googleAutoCompletion.json");

  // Simulate latency (100–200ms)
  const delay = Math.floor(Math.random() * 100) + 100;
  await new Promise(resolve => setTimeout(resolve, delay));

  // Read and parse file
  const json = await fs.readFile(filePath, "utf8");
  const jsonData = JSON.parse(json);

  // Transform data
  const result = (jsonData.suggestions || [])
  .map((item, index) => ({
    id: index,
    name: item.value
  }));

  return result;
}
