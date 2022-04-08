// We use the path module for accessing the files in disk
const path = require("path");

const express = require("express");

const router = express.Router();

// we can, temporarily, store data in variables
const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { docTitle: "Add Product", path: "/add-product" });
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
