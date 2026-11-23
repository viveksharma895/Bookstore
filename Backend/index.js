import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookRoutes from "./route/book.route.js";

dotenv.config();

const app = express();
const parsedPort = Number.parseInt(process.env.PORT, 10);
const PORT =
  Number.isInteger(parsedPort) && parsedPort > 0 && parsedPort <= 65535
    ? parsedPort
    : 4000;

const URI = process.env.Mongo_URI || "mongodb://localhost:27017/bookstore";

mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) =>
    console.error("Failed to connect to MongoDB:", error.message),
  );

//defining routes

app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Book Store Backend");
});

app
  .listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  })
  .on("error", (error) => {
    console.error(`Failed to start server on port ${PORT}:`, error.message);
  });
