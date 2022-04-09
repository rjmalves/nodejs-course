// we can, temporarily, store data in variables
const products = [];

exports.getProducts = (req, res, next) => {
  res.render("shop", { docTitle: "My Products", prods: products, path: "/" });
};

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { docTitle: "Add Product", path: "/add-product" });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};
