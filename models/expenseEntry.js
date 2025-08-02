const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Expense = sequelize.define("Expense", {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount1: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  amount2: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  remarks: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  billReceipt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Expense;
