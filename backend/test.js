import dotenv from "dotenv";
dotenv.config();
import { searchAmazon } from "./services/amazon.js";

async function test() {
  try {
    const results = await searchAmazon("keyboard");
    console.log("Test results:", results);
  } catch (err) {
    console.error("Test error:", err);
  }
}

test()
