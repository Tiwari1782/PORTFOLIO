const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  submitContact,
  getMessages,
  deleteMessage,
} = require("../controllers/contactController");

router.post("/", submitContact);
router.get("/", protect, getMessages);
router.delete("/:id", protect, deleteMessage);

module.exports = router;