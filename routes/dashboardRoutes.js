// File: routes/dashboardRoutes.js
const express = require("express");
const router = express.Router();
const { getDashboard, updateDashboard } = require("../controllers/dashboardController");

router.get("/", getDashboard);
router.put("/", updateDashboard);

module.exports = router;