const path = require("path");
const rootDir = require("./util/path");

const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();

const errorController = require("./controllers/error");
app.set("view engine", "ejs");
app.set("views", "./views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  User.findById("6278feae9ac0d6d626734440")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect("mongodb://root:1234@localhost:27017/products")
  .then((result) => {
    User.findOne()
      .then((user) => {
        if (!user) {
          const user = new User({
            name: "Rogerio",
            email: "rogerio@test.com",
            cart: { items: [] },
          });
          user.save();
        }
      })
      .catch((err) => console.log(err));
    app.listen(3000);
  })
  .catch((err) => console.log(err));
