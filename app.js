require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const sequelize = require("./config/db");

const path = require("path");
require("./models/Log");
require("./models/Vendor");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/logs", require("./routes/logRoutes"));
app.use("/api/vendor", require("./routes/vendorRoutes"));
app.use("/uploads", express.static("uploads"));
app.use("/api/logs", require("./routes/logRoutes"));
app.get("/", (req, res) => {
  res.send("Project Photos API is running...");
});
app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/expenses", require("./routes/expenseEntryRoutes"));

// Sync DB
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.error("❌ Sync error:", err));

module.exports = app;
