const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Issue = sequelize.define("Issue", {
  issueName: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  priority: { 
    type: DataTypes.ENUM("Urgent", "Medium", "Low"), 
    allowNull: false 
  },
  assignedTo: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  dueDate: { 
    type: DataTypes.DATEONLY, 
    allowNull: false 
  },
  status: { 
    type: DataTypes.ENUM("Open", "In Progress", "Closed"), 
    defaultValue: "Open" 
  }
});

module.exports = Issue;