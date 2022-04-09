// We use the path module for accessing the files in disk
const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.get("/add-product", productController.getAddProduct);

router.post("/product", productController.postAddProduct);

module.exports = router;
