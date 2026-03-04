const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

// ================= MIDDLEWARE =================

// Allow multiple origins (local + production)
const allowedOrigins = [
  "http://localhost:5173", // Vite local
  "http://localhost:3000", // React local
  process.env.CLIENT_URL,  // Production frontend (Vercel)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// ================= ROUTES =================

app.use("/api/projects", require("./routes/projects"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/achievements", require("./routes/achievements"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/visitors", require("./routes/visitors"));
app.use("/api/ai", require("./routes/ai"));

// ================= HEALTH CHECK =================

app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running 🚀" });
});

// ================= CONNECT DATABASE =================

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });