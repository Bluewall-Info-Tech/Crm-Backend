// app.js ✅ GOOD VERSION
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sequelize = require("./config/db");
const path = require("path");
require("./models/Vendor");


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/uploads", express.static("uploads"));

app.use("/api/vendor", require("./routes/vendorRoutes"));

app.get("/", (req, res) => res.send("Construction SQL API is live"));

// ✅ Sync DB
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.error("❌ Sync error:", err));

module.exports = app;  // DO NOT call app.listen() here!
