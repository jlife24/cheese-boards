const { User } = require("./User.js");
const { Board } = require("./Board.js");
const { Cheese } = require("./Cheese.js");

User.hasMany(Board);
Board.belongsTo(User);
Board.belongsToMany(Cheese, { through: "cheeeseTable" });
Cheese.belongsToMany(Board, { through: "cheeseTable" });

// Student.belongsToMany(Teacher, {through: “teacher_student”});
module.exports = { User, Board, Cheese };
