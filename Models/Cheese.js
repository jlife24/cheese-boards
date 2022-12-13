const { sequelize } = require("../db.js");
const { Sequelize } = require("sequelize");

const Cheese = sequelize.define("cheese", {
  title: Sequelize.toString,
  description: Sequelize.STRING,
});

module.exports = { Cheese };
