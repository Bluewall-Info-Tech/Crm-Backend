require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sequelize = require("./config/db");

photo-backend
const path = require("path");
require("./models/Log");


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/logs", require("./routes/logRoutes"));


app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Project Photos API is running...");
});




app.get("/", (req, res) => res.send("Construction SQL API is live"));

app.use("/api/dashboard", require("./routes/dashboardRoutes"));

app.get("/", (req, res) => res.send("Dashboard API is running..."));
main

// Sync DB
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.error("❌ Sync error:", err));

module.exports = app;
