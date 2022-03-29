// Here we import the helper function to get the path to the html files,
// in the routes we do it differently (this is cleaner)
const path = require("path");
const rootDir = require("./util/path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// Imports the routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
// Gives read access to folder with static files
app.use(express.static(path.join(rootDir, "public")));

app.use(adminRoutes);
app.use(shopRoutes);

// We can add a last route to be a default error page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
