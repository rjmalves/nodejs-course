const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop", {
      docTitle: "My Products",
      prods: products,
      path: "/",
    });
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { docTitle: "Add Product", path: "/add-product" });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
