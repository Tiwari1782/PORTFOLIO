const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: String },
    description: { type: String },
    certificateLink: { type: String },
    type: {
      type: String,
      enum: ["Certificate", "Internship", "Hackathon", "Award"],
      default: "Certificate",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Achievement", achievementSchema);