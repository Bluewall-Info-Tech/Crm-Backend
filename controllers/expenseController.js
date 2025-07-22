const Expense = require("../models/Expense");
const path = require("path");

exports.createExpense = async (req, res) => {
  try {
    const { date, category, amount1, amount2, remarks } = req.body;
    let receiptPath = null;

    if (req.file) {
      receiptPath = `/uploads/${req.file.filename}`;
    }

    const expense = await Expense.create({
      date,
      category,
      amount1,
      amount2,
      remarks,
      receiptPath,
    });

    res.status(201).json(expense);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
