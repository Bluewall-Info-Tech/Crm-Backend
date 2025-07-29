// models/Financial.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Financial = sequelize.define("Financial", {
  projectName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assignedBudget: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  spentAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = Financial;
