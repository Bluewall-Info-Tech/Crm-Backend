// routes/financialRoutes.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  getAllFinancials,
  createFinancial,
} = require("../controllers/financialController");

router.get("/", getAllFinancials);
router.post("/", upload.single("file"), createFinancial);

module.exports = router;
