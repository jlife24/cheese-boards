const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Cheese = sequelize.define("cheese", {
  title: Sequelize.toString,
  description: Sequelize.STRING,
});
module.exports = { Cheese };
