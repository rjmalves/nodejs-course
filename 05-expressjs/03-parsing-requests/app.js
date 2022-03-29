const express = require("express");

// In order to parse the requests bodies (are binary by default)
// we use another dependency
const bodyParser = require("body-parser");

const app = express();

// Adding this middleware at first will parse all bodies
// with the same parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add Product</button></form> '
  );
});

// This implementation also has an issue: it executes for all methods!!
// app.use("/product", (req, res, next) => {
//   // If the body-parser middleware is being used, no issues in viewing
//   console.log(req.body);
//   // After the form submission, redirects the page
//   res.redirect("/");
// });

// This works only for POST requests!
app.post("/product", (req, res, next) => {
  // If the body-parser middleware is being used, no issues in viewing
  console.log(req.body);
  // After the form submission, redirects the page
  res.redirect("/");
});

// The use function can receive a "path"
app.use("/", (req, res, next) => {
  console.log("In another!");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
