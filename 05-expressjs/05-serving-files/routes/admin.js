// We use the path module for accessing the files in disk
const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
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
