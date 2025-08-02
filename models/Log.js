// models/Log.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Log = sequelize.define("Log", {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  taskDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  materialsUsed: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = Log;