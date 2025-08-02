const Vendor = require("../models/Vendor");

exports.addVendor = async (req, res) => {
  try {
    let data;

    if (req.headers["content-type"]?.includes("multipart/form-data")) {
      data = req.body;
      if (req.file) {
        data.imagePath = req.file.filename;
      }
    } else {
      data = req.body;
    }

    const vendor = await Vendor.create(data);
    res.status(201).json(vendor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: err.message });
  }
};

// ✅ MOVE THIS OUTSIDE
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    res.status(200).json(vendors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
