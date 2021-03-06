const path = require("path");
const rootDir = require("./util/path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");
const Order = require("./models/order");
const OrderItem = require("./models/order-item");

app.set("view engine", "ejs");
app.set("views", "./views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// INSERT INTO products VALUES(NULL, "A Book", 12.99, "This is an awesome book!", "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png");
// INSERT INTO users VALUES(NULL, "A Book", 12.99, "This is an awesome book!", "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product); // Optional
User.hasOne(Cart);
Cart.belongsTo(User); // Optional
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Max", email: "test@test.com" });
    }
    // return Promise.resolve(user); - is optional, since returning a promise object always does this
    return user;
  })
  .then((user) => {
    return user.createCart();
  })
  .then((cart) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
