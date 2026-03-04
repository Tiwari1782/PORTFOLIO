const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY is missing in .env file!");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const PORTFOLIO_CONTEXT = `
You are Prakash Tiwari's personal AI portfolio assistant. Your name is "PrakashAI".
You answer questions about Prakash in a friendly, professional, and concise way.
If someone asks something unrelated to Prakash, politely redirect them.
Always respond in 2-4 sentences max unless asked for detail.

Here is everything about Prakash Tiwari:

PERSONAL INFO:
- Full Name: Prakash Tiwari
- Location: Mohali, Punjab, India
- Email: prakashtiwarie06@gmail.com
- GitHub: https://github.com/Tiwari1782
- Currently: 2nd Year B.Tech CSE Student at CGC University Mohali

SKILLS:
- Frontend: HTML5, CSS3, JavaScript, React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB, MySQL
- Tools: Git, GitHub, VS Code, Postman
- Currently Learning: TypeScript, Next.js

PROJECTS:
1. WanderLust - Full-Stack Airbnb Clone
   - Tech: EJS, Node.js, Express, MongoDB, CSS
   - Features: Authentication, authorization, image uploads, interactive maps
   - Live: https://wanderlust-menk.onrender.com/
   - GitHub: https://github.com/Tiwari1782/WanderLust

2. AI Fraud Detection Dashboard
   - Tech: Axios, EJS, CSS, Stripe API, Express.js, MySQL, Node.js
   - Features: Real-time monitoring, risk-scoring engine, CSV analysis, report generation
   - Live: https://fraud-detection-dashboard-muan.onrender.com/dashboard
   - GitHub: https://github.com/Tiwari1782/Fraud-Detection-Dashboard

3. F1 Race Replay
   - Tech: FastF1, Arcade, Python 3.8+, numpy
   - Features: Interactive race replays, leaderboard, tyre/status displays, telemetry overlays
   - GitHub: https://github.com/Tiwari1782/F1-RACE-REPLAY-

ACHIEVEMENTS:
1. Generative AI Professional Certificate - Oracle (Sep 2025)
2. Technology Job Simulation - Deloitte (Dec 2025)
3. CSS Certification - HackerRank (Apr 2025)

EDUCATION:
- B.Tech CSE at CGC University Mohali (2023-2027)

AVAILABILITY:
- Open for freelance work and internships
`;

// Rate limiting
const rateLimitMap = new Map();
const RATE_LIMIT = 10;
const RATE_WINDOW = 60 * 1000;

const checkRateLimit = (ip) => {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];
  const recentRequests = userRequests.filter((time) => now - time < RATE_WINDOW);

  if (recentRequests.length >= RATE_LIMIT) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
};

// POST — Chat with AI
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    console.log("📩 AI Chat request received:", message);

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ reply: "Please ask me something!" });
    }

    if (message.length > 500) {
      return res.status(400).json({ reply: "Message too long. Keep it under 500 characters." });
    }

    const clientIP = req.ip || req.headers["x-forwarded-for"] || "unknown";
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({
        reply: "You're asking too many questions! Please wait a minute and try again. 😊",
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ GEMINI_API_KEY is not set!");
      return res.status(500).json({ reply: "AI is not configured yet. Please try later." });
    }

    const prompt = `${PORTFOLIO_CONTEXT}\n\n---\nVisitor's Question: ${message}\n\nRespond as PrakashAI:`;

    // Try models in order — use whichever has available quota
    const MODELS = [
      "gemini-2.0-flash-lite",
      "gemini-1.5-flash",
      "gemini-1.5-flash-8b",
      "gemini-pro",
      "gemini-2.0-flash",
    ];

    let aiResponse = null;
    let lastError = null;

    for (const modelName of MODELS) {
      try {
        console.log(`🤖 Trying model: ${modelName}...`);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        aiResponse = result.response.text();
        console.log(`✅ Success with ${modelName}`);
        break;
      } catch (err) {
        console.log(`⚠️ ${modelName} failed: ${err.message.substring(0, 80)}`);
        lastError = err;
        continue;
      }
    }

    if (!aiResponse) {
      throw lastError || new Error("All models failed");
    }

    console.log("✅ AI Response:", aiResponse.substring(0, 100) + "...");

    res.json({ reply: aiResponse });
  } catch (error) {
    console.error("❌ AI Chat Error:", error.message);

    if (error.message?.includes("API_KEY_INVALID") || error.message?.includes("API key")) {
      return res.status(500).json({
        reply: "AI API key is invalid. Please check the configuration.",
      });
    }

    if (error.message?.includes("quota") || error.message?.includes("429")) {
      return res.status(500).json({
        reply: "I'm taking a short break due to high demand! Please try again in a minute. 🤖",
      });
    }

    res.status(500).json({
      reply: "Sorry, I'm having trouble thinking right now. Please try again later! 🤖",
    });
  }
});

module.exports = router;