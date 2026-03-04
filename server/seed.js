const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Project = require("./models/Project");
const Achievement = require("./models/Achievement");

dotenv.config();

const projects = [
  {
    title: "WanderLust - Full-Stack Airbnb Clone",
    description:
      "WanderLust is a MERN stack property rental platform inspired by Airbnb, featuring authentication, authorization, image uploads, and interactive maps.",
    techStack: ["EJS", "Node.js", "Express", "MongoDB", "CSS"],
    category: "Full Stack",
    liveLink: "https://wanderlust-menk.onrender.com/",
    githubLink: "https://github.com/Tiwari1782/WanderLust",
    image:
      "https://raw.githubusercontent.com/Tiwari1782/WanderLust/main/Screenshots/Home-Page.png",
  },
  {
    title: "AI Fraud Detection Dashboard",
    description:
      "AI Fraud Detection Dashboard is a real-time monitoring system built with Node.js, Express, and MySQL that detects suspicious transactions using a risk-scoring engine, visualizes insights, supports CSV analysis, and generates reports.",
    techStack: [
      "Axios",
      "EJS",
      "CSS",
      "Stripe API",
      "Express.js",
      "MySQL",
      "Node.js",
    ],
    category: "Web",
    liveLink: "https://fraud-detection-dashboard-muan.onrender.com/dashboard",
    githubLink: "https://github.com/Tiwari1782/Fraud-Detection-Dashboard",
    image:
      "https://raw.githubusercontent.com/Tiwari1782/Fraud-Detection-Dashboard/main/screenshots/dashboard.png",
  },
  {
    title: "F1 Race Replay",
    description:
      "A Python app that loads F1 telemetry (FastF1) and renders interactive race and sprint replays with a leaderboard, tyre/status, lap/time displays, and driver telemetry overlays.",
    techStack: ["FastF1", "Arcade", "Python 3.8+", "numpy"],
    category: "Web",
    liveLink: "",
    githubLink: "https://github.com/Tiwari1782/F1-RACE-REPLAY-",
    image:
      "https://raw.githubusercontent.com/Tiwari1782/F1-RACE-REPLAY-/main/resources/preview.png",
  },
];

const achievements = [
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    date: "Sep 2025",
    description: "Completed the Generative AI Professional Certificate",
    certificateLink:
      "https://media.licdn.com/dms/image/v2/D562DAQGC5wciVHZL0w/profile-treasury-image-shrink_800_800/B56ZtLqjkPJsAk-/0/1766501009158?e=1773244800&v=beta&t=udGpxSdCaEgXwLtDL0oGDWeABYQq1wkMH13aYV05cbg",
    type: "Certificate",
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    date: "Dec 2025",
    description: "Completed Forage Deloitte Job Simulation certification",
    certificateLink:
      "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_6948fd1e1b56e98cf2f005e2_1766416158573_completion_certificate.pdf",
    type: "Certificate",
  },
  {
    title: "CSS",
    issuer: "HackerRank",
    date: "Apr 2025",
    description:
      "Successfully earned a CSS certification by demonstrating proficiency in modern styling, layouts, and responsive web design principles.",
    certificateLink:
      "https://www.hackerrank.com/certificates/iframe/c36a434c5a88",
    type: "Certificate",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await Project.deleteMany({});
    console.log("🗑️  All old projects deleted");

    await Achievement.deleteMany({});
    console.log("🗑️  All old achievements deleted");

    await Project.insertMany(projects);
    console.log(`✅ ${projects.length} new projects added`);

    await Achievement.insertMany(achievements);
    console.log(`✅ ${achievements.length} new achievements added`);

    console.log("\n🎉 Database reseeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error.message);
    process.exit(1);
  }
};

seedDB();