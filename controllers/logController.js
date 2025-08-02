// controllers/logController.js
const Log = require("../models/Log");
const path = require("path");
const fs = require("fs");

exports.createLog = async (req, res) => {
  try {
    const { date, taskDescription, materialsUsed } = req.body;
    
    const log = await Log.create({
      date,
      taskDescription,
      materialsUsed
    });

    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getLogs = async (req, res) => {
  try {
    const logs = await Log.findAll();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Make sure this matches what you import in routes
exports.uploadPhoto = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ msg: "Please upload a file" });
    }

    const file = req.files.file;
    const fileName = `photo-${Date.now()}${path.extname(file.name)}`;
    const uploadPath = path.join(__dirname, "../uploads", fileName);

    file.mv(uploadPath, async (err) => {
      if (err) {
        return res.status(500).json({ msg: "File upload failed" });
      }

      res.json({ 
        fileName: fileName,
        filePath: `/uploads/${fileName}`
      });
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};