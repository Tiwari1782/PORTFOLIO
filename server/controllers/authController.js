const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// POST — Admin Login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(admin._id);
    res.json({ token, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST — Register first admin (run once, then remove or protect)
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({ username, password });
    const token = generateToken(admin._id);
    res.status(201).json({ token, message: "Admin created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};