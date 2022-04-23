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

// CREATE TABLE products(
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     title VARCHAR(255) NOT NULL,
//     price DOUBLE NOT NULL,
//     description TEXT NOT NULL,
//     imageUrl VARCHAR(255) NOT NULL);

// INSERT INTO products VALUES(NULL, "A Book", 12.99, "This is an awesome book!", "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
