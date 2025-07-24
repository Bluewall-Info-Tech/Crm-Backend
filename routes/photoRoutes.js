const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  createPhoto,
  getPhotos,
  getPhoto,
  updatePhoto,
  deletePhoto,
} = require("../controllers/photoController");

// Upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

// Routes
router.get("/", getPhotos);
router.get("/:id", getPhoto);
router.post("/", upload.single("image"), createPhoto);
router.put("/:id", upload.single("image"), updatePhoto);
router.delete("/:id", deletePhoto);

module.exports = router;
