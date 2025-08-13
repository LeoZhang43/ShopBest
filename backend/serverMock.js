import express from "express";
import cors from "cors";
import { searchAmazon } from "./mock/amazonMock.js";
import { searchWalmart } from "./mock/walmartMock.js";
import { searchGoogle } from "./mock/googleMock.js";
import { searchSuggestions } from "./mock/searchSuggestion.js"; 

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/amazon", async (req, res) => {
  try {
    const jsonData = await searchAmazon();
    res.json(jsonData);
  } catch (err) {
    console.error("Amazon API error:", err);
    res.status(500).json({ error: "Failed to load data" });
  }
});

app.get("/api/walmart", async (req, res) => {
  try {
    const jsonData = await searchWalmart();
    res.json(jsonData);
  } catch (err) {
    console.error("Walmart API error:", err);
    res.status(500).json({ error: "Failed to load data" });
  }
});

app.get("/api/google", async (req, res) => {
  try {
    const jsonData = await searchGoogle();
    res.json(jsonData);
  } catch (err) {
    console.error("Google API error:", err);
    res.status(500).json({ error: "Failed to load data" });
  }
});

app.get("/api/suggestion", async (req, res) => {
  try {
    const jsonData = await searchSuggestions();
    res.json(jsonData);
  } catch (err) {
    console.error("Suggestion API error:", err);
    res.status(500).json({ error: "Failed to load data" });
  }
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on port ${process.env.PORT || 8000}`);
});
