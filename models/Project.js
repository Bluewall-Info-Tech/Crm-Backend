const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Project = sequelize.define("Project", {
  projectName: { type: DataTypes.STRING, allowNull: false },
  status: {
    type: DataTypes.ENUM("Active", "Completed", "On hold"),
    defaultValue: "Active",
  },
  assignedDate: { type: DataTypes.DATEONLY },
  deadline: { type: DataTypes.DATEONLY },
});

module.exports = Project;
