const Achievement = require("../models/Achievement");

// GET all achievements
exports.getAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ createdAt: -1 });
    res.json(achievements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create achievement (admin)
exports.createAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.create(req.body);
    res.status(201).json(achievement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE achievement (admin)
exports.deleteAchievement = async (req, res) => {
  try {
    await Achievement.findByIdAndDelete(req.params.id);
    res.json({ message: "Achievement deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};