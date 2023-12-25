const { DataTypes } = require("sequelize");

const db = require("../config/db_config");

const Todo = db.define("todo", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Todo;
