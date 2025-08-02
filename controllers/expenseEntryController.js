const Expense = require("../models/expenseEntry");

exports.createExpense = async (req, res) => {
  try {
    const { date, category, amount1, amount2, remarks } = req.body;
    const billReceipt = req.file ? req.file.filename : null;

    const expense = await Expense.create({
      date,
      category,
      amount1,
      amount2,
      remarks,
      billReceipt,
    });

    res.status(201).json({ message: "Expense added successfully", expense });
  } catch (error) {
    res.status(500).json({ message: "Error creating expense", error });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
};
