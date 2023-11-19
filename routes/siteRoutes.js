const express = require("express");
const router = express.Router();
const {
  getSite
} = require("../controllers/siteController");

router.route("/").get(getSite);

module.exports = router;
