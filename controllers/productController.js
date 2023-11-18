const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");

// @desc    Get products
// @route   GET /products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// @desc    Set product
// @route   POST /products
const setProduct = asyncHandler(async (req, res) => {
  // Name and price are necessary
  if (!(req.body.name && req.body.price)) {
    res.status(400);
    throw new Error("Missing name or price");
  }

  const product = await Product.create(req.body);

  res.status(200).json(product);
});

// @desc    Update product
// @route   PUT /products/:id
const updateProduct = asyncHandler(async (req, res) => {
  const providedId = req.params.id;
  const product = await Product.findById(providedId);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  const updatedProduct = await Product.findByIdAndUpdate(providedId, req.body, {new: true});

  res.status(200).json(updatedProduct);
});

// @desc    Delete product
// @route   DELETE /products/:id
const deleteProduct = asyncHandler(async (req, res) => {
  const providedId = req.params.id;
  const product = await Product.findById(providedId);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  await Product.deleteOne();

  res.status(200).json({id: providedId});
});

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
