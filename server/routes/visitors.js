const express = require("express");
const router = express.Router();
const Visitor = require("../models/Visitor");

// GET visitor count
router.get("/", async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = await Visitor.create({ count: 0 });
    }
    res.json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST increment visitor count
router.post("/", async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = await Visitor.create({ count: 1 });
    } else {
      visitor.count += 1;
      visitor.lastUpdated = Date.now();
      await visitor.save();
    }
    res.json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;