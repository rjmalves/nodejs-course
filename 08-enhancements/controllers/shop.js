const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      docTitle: "All Products",
      prods: products,
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/index", {
      docTitle: "Shop",
      prods: products,
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/cart", {
      docTitle: "Your Cart",
      prods: products,
      path: "/cart",
    });
  });
};

exports.getOrders = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/orders", {
      docTitle: "Your Orders",
      prods: products,
      path: "/orders",
    });
  });
};

exports.getCheckout = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/checkout", {
      docTitle: "Checkout",
      prods: products,
      path: "/checkout",
    });
  });
};
