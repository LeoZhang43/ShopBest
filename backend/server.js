import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { searchAmazon } from "./services/amazon.js";
import { autoComplete } from "./services/googleAutoCompletion.js"
import { searchGoogle } from "./services/googleProdut.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/amazon", async (req, res) => {
  const query = req.query.q;
  console.log(query);
  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  try {
    const results = await searchAmazon(query);
    res.json(results);
  } catch (error) {
    console.error("Error in /api/amazon:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/suggestion", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  try {
    const results = await autoComplete(query);
    res.json(results);
  } catch (error) {
    console.error("Error in /api/suggestion:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/products", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  try {
    const results = await searchGoogle(query);
    res.json(results);
  } catch (error) {
    console.error("Error in /api/products:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on port ${process.env.PORT || 8000}`);
});
