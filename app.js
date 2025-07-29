require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sequelize = require("./config/db");

photo-backend
const path = require("path");
auth-feature
require("./models/User");

require("./models/Expense"); 

require("./models/Dashboard");
 main

require("./models/Photo");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/photos", require("./routes/photoRoutes"));

app.get("/", (req, res) => {
  res.send("Project Photos API is running...");
});
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/uploads", express.static("uploads"));

Expense-Page
app.use("/api/expenses", require("./routes/expenseRoutes"));

app.get("/", (req, res) => res.send("Construction SQL API is live"));

app.use("/api/dashboard", require("./routes/dashboardRoutes"));

app.get("/", (req, res) => res.send("Dashboard API is running..."));
main

// Sync DB
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.error("❌ Sync error:", err));

module.exports = app;
