const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add Product</button></form> '
  );
});

// This implementation also has an issue: it executes for all methods!!
// router.use("/product", (req, res, next) => {
//   // If the body-parser middleware is being used, no issues in viewing
//   console.log(req.body);
//   // After the form submission, redirects the page
//   res.redirect("/");
// });

// This works only for POST requests!
router.post("/product", (req, res, next) => {
  // If the body-parser middleware is being used, no issues in viewing
  console.log(req.body);
  // After the form submission, redirects the page
  res.redirect("/");
});

module.exports = router;
