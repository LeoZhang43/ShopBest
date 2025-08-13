import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { searchAmazon } from "./services/amazon.js";

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

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on port ${process.env.PORT || 8000}`);
});
