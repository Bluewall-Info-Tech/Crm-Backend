const express = require("express");
const router = express.Router();
const { createExpense, getExpenses } = require("../controllers/expenseController");
const upload = require("../middleware/upload");

router.post("/", upload.single("file"), createExpense);
router.get("/", getExpenses);

module.exports = router;
