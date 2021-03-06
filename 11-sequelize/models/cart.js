const { Model, DataTypes } = require("sequelize");

const sequelize = require("../util/database");

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  { sequelize, modelName: "cart" }
);

module.exports = Cart;
