import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";

// router.get("/", (req, res) => {
//   res.send("API is Running......");
// });

// @desc Fetch all products
// @route GET/api/products
// @access Public
router.get("/", async (req, res) => {
  //empty objetcs gives everything
  const products = await Product.find({});

  res.json(products);
});

// @desc Fetch single product
// @route GET/api/products
// @access Public
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    console.log("asdasd");
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
