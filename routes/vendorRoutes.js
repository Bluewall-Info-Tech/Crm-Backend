const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { addVendor, getAllVendors } = require("../controllers/vendorController");

// ✅ Accepts both JSON and form-data with optional file
router.post("/add", upload.single("image"), addVendor);
router.get("/all", getAllVendors);

module.exports = router;
