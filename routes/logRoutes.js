// routes/logRoutes.js
const express = require("express");
const router = express.Router();
const {
  createLog,
  getLogs,
  uploadPhoto  // Changed from uploadLogPhoto to uploadPhoto
} = require("../controllers/logController");
const upload = require("../middleware/upload");

router.post("/", createLog);
router.get("/", getLogs);
router.post("/upload", upload.single("file"), uploadPhoto);  // Fixed function name

module.exports = router;