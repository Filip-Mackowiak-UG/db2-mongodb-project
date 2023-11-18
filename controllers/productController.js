const asyncHandler = require('express-async-handler');

// @desc    Get products
// @route   GET /products
const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET" });
});

// @desc    Set product
// @route   POST /products
const setProduct = asyncHandler(async (req, res) => {
  // Name and price are necessary
  if (!(req.body.name && req.body.price)) {
    res.status(400);
    throw new Error('Missing name or price')
  }

  res.status(200).json({ message: "POST" });
})

// @desc    Update product
// @route   PUT /products/:id
const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "PUT" });
})

// @desc    Delete product
// @route   DELETE /products/:id
const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "DELETE" });
});

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
