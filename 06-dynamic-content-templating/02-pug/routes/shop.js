// We use the path module for accessing the files in disk
const path = require("path");

const adminData = require("./admin");

const express = require("express");

const router = express.Router();

// We can use the sendFile method to return an html file.
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
});

module.exports = router;
