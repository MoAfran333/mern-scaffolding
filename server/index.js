import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/connectDB.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("Server Started Successfully");
});

app.listen(PORT, () => {
  connectDB;
  console.log(`Server has Started Running on http://localhost:${PORT}`);
});
