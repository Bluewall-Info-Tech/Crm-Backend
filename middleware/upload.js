const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
financials
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => {
    const uniqueName = `project-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

module.exports = multer({ storage });
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `receipt-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

module.exports = upload;
