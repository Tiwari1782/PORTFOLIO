const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/authController");

router.post("/login", login);
router.post("/register", register); // Use once to create admin, then remove

module.exports = router;