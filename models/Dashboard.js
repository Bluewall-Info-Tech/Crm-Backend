// File: models/Dashboard.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Dashboard = sequelize.define("Dashboard", {
  activeProjects: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  tasks: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  financials: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  projectProgress: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  taskCompletion: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  budgetAllocation: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
});

module.exports = Dashboard;