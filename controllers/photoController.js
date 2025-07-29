const Photo = require("../models/Photo");
const path = require("path");

exports.createPhoto = async (req, res) => {
  try {
    const { title, date, location } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

    const newPhoto = await Photo.create({ title, date, location, imageUrl });
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ message: "Error creating photo", error });
  }
};

exports.getPhotos = async (req, res) => {
  try {
    const photos = await Photo.findAll({ order: [["uploadedAt", "DESC"]] });
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching photos", error });
  }
};

exports.getPhoto = async (req, res) => {
  try {
    const photo = await Photo.findByPk(req.params.id);
    if (!photo) return res.status(404).json({ message: "Photo not found" });
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ message: "Error fetching photo", error });
  }
};

exports.updatePhoto = async (req, res) => {
  try {
    const { title, date, location } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    const photo = await Photo.findByPk(req.params.id);
    if (!photo) return res.status(404).json({ message: "Photo not found" });

    await photo.update({ title, date, location, ...(imageUrl && { imageUrl }) });
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ message: "Error updating photo", error });
  }
};

exports.deletePhoto = async (req, res) => {
  try {
    const photo = await Photo.findByPk(req.params.id);
    if (!photo) return res.status(404).json({ message: "Photo not found" });

    await photo.destroy();
    res.status(200).json({ message: "Photo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting photo", error });
  }
};
