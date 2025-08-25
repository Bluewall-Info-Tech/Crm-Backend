require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sequelize = require("./config/db");

require("./models/User"); // make sure model loads
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("🚀 Auth Project is running...");
});

// Sync DB and start server
sequelize.sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced");
    app.listen(3000, () => console.log("🚀 Server running on port 3000"));
  })
  .catch((err) => console.error("❌ Sync error:", err));
