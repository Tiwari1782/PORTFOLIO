const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

// Routes
app.use("/api/projects", require("./routes/projects"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/achievements", require("./routes/achievements"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/visitors", require("./routes/visitors"));
app.use("/api/ai", require("./routes/ai"));

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running 🚀" });
});

// Connect to MongoDB & Start Server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });