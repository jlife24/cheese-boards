const { sequelize } = require("../db.js");
const { Sequelize } = require("sequelize");

const Cheese = sequelize.define("cheese", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = { Cheese };
