const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

const Board = sequelize.define("boards", {
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  rating: Sequelize.NUMBER,
});
module.exports = { Board };
