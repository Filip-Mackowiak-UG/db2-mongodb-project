const asyncHandler = require("express-async-handler");

// @desc    Get app
// @route   GET /
const getSite = (req, res) => {
  res.status(200).send("Welcome to the backend! Explore the vast majority of possibilities!")
};

module.exports = {
  getSite
};
