import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is Running......");
});

app.use("/api/products", productRoutes);

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((el) => el._id === req.params.id);
//   res.json(product);
// });

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} ${PORT}`)
);
