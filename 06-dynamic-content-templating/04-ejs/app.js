// Here we import the helper function to get the path to the html files,
// in the routes we do it differently (this is cleaner)
const path = require("path");
const rootDir = require("./util/path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "Page Not Found", path: "" });
});

app.listen(3000);
