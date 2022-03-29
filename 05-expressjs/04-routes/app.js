const express = require("express");

// In order to parse the requests bodies (are binary by default)
// we use another dependency
const bodyParser = require("body-parser");

const app = express();

// Imports the routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Adding this middleware at first will parse all bodies
// with the same parser
app.use(bodyParser.urlencoded({ extended: false }));

// instead of declaring all routes in the main file, you can choose
// to use the express Router
// you can add an prefix, which will be preppended to all the routes
// declared in the router
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// We can add a last route to be a default error page
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
