const path = require("path");
const rootDir = require("./util/path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const errorController = require("./controllers/error");

app.set("view engine", "ejs");
app.set("views", "./views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
