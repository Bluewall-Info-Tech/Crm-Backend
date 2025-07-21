// controllers/financialController.js
const Financial = require("../models/Financial");

exports.getAllFinancials = async (req, res) => {
  try {
    const data = await Financial.findAll();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.createFinancial = async (req, res) => {
  try {
    const { projectName, assignedBudget, spentAmount } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newEntry = await Financial.create({
      projectName,
      assignedBudget,
      spentAmount,
      imageUrl,
    });

    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
