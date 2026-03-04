const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [{ type: String }],
    category: {
      type: String,
      enum: ["Web", "API", "Full Stack", "AI & ML"],
      default: "Web",
    },
    liveLink: { type: String },
    githubLink: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);