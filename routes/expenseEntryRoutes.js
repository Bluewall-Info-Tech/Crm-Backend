const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { createExpense, getAllExpenses } = require("../controllers/expenseEntryController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/", upload.single("billReceipt"), createExpense);
router.get("/", getAllExpenses);

module.exports = router;
