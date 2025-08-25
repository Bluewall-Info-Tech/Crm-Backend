const express = require("express");
const router = express.Router();
const { register, login, verifyEmail } = require("../controllers/authController");

// Auth routes
router.post("/signup", register);
router.post("/login", login);
router.get("/verify/:token", verifyEmail);

module.exports = router;
