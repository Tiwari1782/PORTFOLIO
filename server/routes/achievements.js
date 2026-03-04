const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getAchievements,
  createAchievement,
  deleteAchievement,
} = require("../controllers/achievementController");

router.get("/", getAchievements);
router.post("/", protect, createAchievement);
router.delete("/:id", protect, deleteAchievement);

module.exports = router;