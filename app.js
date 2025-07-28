// app.js ✅ GOOD VERSION
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sequelize = require("./config/db");
const path = require("path");
require("./models/Expense"); 

require("./models/Dashboard");


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/uploads", express.static("uploads"));

Expense-Page
app.use("/api/expenses", require("./routes/expenseRoutes"));

app.get("/", (req, res) => res.send("Construction SQL API is live"));
=======
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

app.get("/", (req, res) => res.send("Dashboard API is running..."));
main

// ✅ Sync DB
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.error("❌ Sync error:", err));

module.exports = app;  // DO NOT call app.listen() here!
