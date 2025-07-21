const Financial = require("../models/Financial");

exports.getAllFinancials = async (req, res) => {
  try {
    const data = await Financial.findAll();
    res.json(data);
  } catch (err) {
    console.error("GET ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.createFinancial = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { projectName, assignedBudget, spentAmount } = req.body;
    if (!projectName || !assignedBudget || !spentAmount) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newEntry = await Financial.create({
      projectName,
      assignedBudget: parseFloat(assignedBudget),
      spentAmount: parseFloat(spentAmount),
      imageUrl,
    });

    res.status(201).json(newEntry);
  } catch (err) {
    console.error("CREATE ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
