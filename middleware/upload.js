const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure the "uploads" folder exists
  },
  filename: (req, file, cb) => {
    const uniqueName = `receipt-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

// Create upload middleware
const upload = multer({ storage });

module.exports = upload;
