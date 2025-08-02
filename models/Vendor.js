const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Vendor = sequelize.define("Vendor", {
  vendorName: { type: DataTypes.STRING, allowNull: false },
  connectionDate: { type: DataTypes.DATE },
  contactPerson: { type: DataTypes.STRING },
  vendorType: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  material: { type: DataTypes.STRING },
  quantity: { type: DataTypes.STRING },
  supplyFrom: { type: DataTypes.DATE },
  supplyTo: { type: DataTypes.DATE },
  price: { type: DataTypes.FLOAT },
  taxId: { type: DataTypes.STRING },
  accountNumber: { type: DataTypes.STRING },
  ifscCode: { type: DataTypes.STRING },
  notes: { type: DataTypes.TEXT },
  imagePath: { type: DataTypes.STRING }, // ⬅️ Save image filename
});

module.exports = Vendor;
