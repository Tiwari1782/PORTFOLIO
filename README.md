<div align="center">

![Portfolio Preview](./Screenshot/main.png)

**A modern full-stack developer portfolio with AI chatbot, live coding stats, admin dashboard, and PWA support**

<a href="https://prakash-portfolio-nu.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/%20Live%20Demo-Visit%20Portfolio-00d4ff?style=for-the-badge&labelColor=1a1a2e" alt="Live Demo" />
</a>

[![GitHub](https://img.shields.io/badge/GitHub-Tiwari1782-181717?style=for-the-badge&logo=github)](https://github.com/Tiwari1782)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/prakash-tiwari-8900bb2b2/)
[![LeetCode](https://img.shields.io/badge/LeetCode-pRaKaSh1782-FFA116?style=for-the-badge&logo=leetcode)](https://leetcode.com/u/pRaKaSh1782/)

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)

</div>

---

## 🎯 Project Overview

A personal developer portfolio built with the MERN stack, featuring:

- **Frontend:** Responsive React UI with dark/light theme, animations, and live stats
- **Backend:** Express.js REST API with JWT auth, Nodemailer, and rate limiting
- **AI Chatbot:** Gemini-powered assistant with full portfolio context
- **Live Integrations:** Real-time GitHub & LeetCode stats via public APIs
- **Admin Panel:** JWT-protected dashboard to manage projects & achievements

---

## ✨ Features

### 🎨 Frontend

| Feature | Description |
|---------|-------------|
| 🌙 **Dark/Light Theme** | Smooth toggle with system preference detection |
| ✍️ **Typing Animation** | Custom typing effect with Font Awesome icons |
| 📊 **Animated Counters** | Numbers animate on scroll into view |
| 🎯 **Custom Cursor** | Interactive cursor with hover effects |
| 📱 **Fully Responsive** | Pixel-perfect on all devices |
| 🔄 **Smooth Animations** | Framer Motion page transitions & scroll reveals |
| 📄 **Resume Modal** | View & download resume in-site |

### 🖥️ Sections

| Section | Description |
|---------|-------------|
| 🏠 **Hero** | Animated intro with typing SVG & CTA buttons |
| 👤 **About** | Bio, quick stats & animated counters |
| 💻 **Skills** | Tech stack grid with icons |
| 🏅 **LeetCode** | Live stats, progress bars, heatmap |
| 📂 **Projects** | Category filter, thumbnails, detail pages |
| 🐙 **GitHub** | Live contribution graph, stats, streak |
| 🎓 **Education** | Timeline with institution details |
| 📬 **Contact** | Form with Nodemailer email delivery |

### ⚙️ Backend

| Feature | Description |
|---------|-------------|
| 🔐 **JWT Auth** | Secure admin authentication |
| 📧 **Nodemailer** | Contact form email delivery |
| 🤖 **Gemini AI** | AI chatbot with portfolio context |
| 📊 **Visitor Counter** | Session-based visitor tracking |
| 🗄️ **MongoDB** | Full CRUD for projects & achievements |
| 🛡️ **Rate Limiting** | API abuse prevention |

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

### AI & Integrations
![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat-square&logo=google&logoColor=white)
![LeetCode API](https://img.shields.io/badge/LeetCode_API-FFA116?style=flat-square&logo=leetcode&logoColor=black)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=flat-square&logo=github&logoColor=white)

---

## 🤖 AI Chatbot — Deep Dive

The portfolio includes a **personal AI assistant** powered by **Google Gemini API**.

### How it works

```
Visitor asks a question
       ↓
Frontend sends to /api/ai/chat
       ↓
Backend injects portfolio context + question → Gemini API
       ↓
Gemini responds as "PrakashAI"
       ↓
Chat widget displays the answer
```

### Features
- 🧠 Knows everything about you (skills, projects, achievements)
- 💡 Suggested quick-start questions
- 🛡️ Rate limiting (10 req/min per IP)
- 🔄 Model fallback (tries multiple Gemini models)
- ⌨️ Typing indicator with bouncing dots

### Example

> **Visitor:** What tech stack does Prakash use?
>
> **PrakashAI:** Prakash works with the MERN stack — MongoDB, Express.js, React.js, and Node.js. He also uses Tailwind CSS for styling, and is currently learning TypeScript and Next.js!

---

## 📊 Live Integrations

All stats update **automatically** — no manual editing needed!

| Integration | What it Shows | API Source |
|-------------|--------------|------------|
| 🐙 **GitHub Stats** | Repos, followers, stars, commits | `api.github.com` |
| 🟩 **Contribution Graph** | Green squares heatmap | `ghchart.rshah.org` |
| 🔥 **GitHub Streak** | Current & longest streak | `github-readme-streak-stats` |
| 🏅 **LeetCode Solved** | Easy/Medium/Hard breakdown | LeetCode GraphQL API |
| 📊 **LeetCode Ranking** | Global ranking | LeetCode GraphQL API |
| 🗓️ **LeetCode Heatmap** | Submission activity | `leetcard.jacoblin.cool` |
| 👁️ **Visitor Counter** | Total site visitors | Custom MongoDB counter |

---

## 🔐 Admin Dashboard

Access the admin panel at `/admin` to manage portfolio content without touching code.

### Capabilities
- ➕ Add / ✏️ Edit / 🗑️ Delete projects
- ➕ Add / ✏️ Edit / 🗑️ Delete achievements
- 📬 View contact form submissions
- 🔒 Protected with JWT authentication

### First-time setup

```bash
# Create admin account via API
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "your_password"}'
```

---

## 📁 Project Structure

```
portfolio/
├── client/                     # React Frontend
│   ├── public/
│   │   ├── photo.jpg           # Profile photo
│   │   ├── resume.pdf          # Downloadable resume
│   │   └── manifest.json       # PWA manifest
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── AIChatBot.jsx   # 🤖 AI Assistant
│       │   ├── ResumeModal.jsx
│       │   └── CustomCursor.jsx
│       ├── context/
│       │   └── ThemeContext.jsx # Dark/Light mode
│       ├── sections/
│       │   ├── Hero.jsx
│       │   ├── About.jsx
│       │   ├── Skills.jsx
│       │   ├── Projects.jsx
│       │   ├── CodingProfiles.jsx
│       │   ├── GitHub.jsx
│       │   └── Contact.jsx
│       └── pages/
│           ├── Home.jsx
│           ├── AdminLogin.jsx
│           └── AdminDashboard.jsx
│
└── server/                     # Express Backend
    ├── models/
    │   ├── Project.js
    │   ├── Achievement.js
    │   ├── Contact.js
    │   └── Visitor.js
    ├── routes/
    │   ├── projects.js
    │   ├── achievements.js
    │   ├── contact.js
    │   ├── auth.js
    │   └── ai.js              # 🤖 Gemini AI route
    ├── middleware/
    │   └── authMiddleware.js
    └── server.js
```

---

## ⚙️ Setup & Run Locally

### Prerequisites

- Node.js v18+
- MongoDB (local or [Atlas](https://www.mongodb.com/atlas))
- [Gemini API Key](https://aistudio.google.com/) (free)
- Gmail account for Nodemailer

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Tiwari1782/portfolio.git
cd portfolio

# 2. Install dependencies
cd server && npm install
cd ../client && npm install

# 3. Setup environment variables
cd ../server
cp .env.example .env
# Edit .env with your values

# 4. Seed the database
node seed.js

# 5. Start development servers
# Terminal 1 — Backend
cd server && npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

### Access the app

| Service | URL |
|---------|-----|
| Frontend | `http://localhost:5173` |
| Backend API | `http://localhost:5000` |
| Admin Panel | `http://localhost:5173/admin` |

---

## 🔑 Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/portfolio
JWT_SECRET=your_super_secret_jwt_key
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your_gmail_app_password
GEMINI_API_KEY=your_gemini_api_key
```

| Variable | How to Get |
|----------|------------|
| `MONGO_URI` | Create free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas) |
| `JWT_SECRET` | Any random strong string |
| `EMAIL_PASS` | [Gmail App Password](https://myaccount.google.com/apppasswords) — NOT your regular password |
| `GEMINI_API_KEY` | Free at [Google AI Studio](https://aistudio.google.com/) |

> ⚠️ **Never commit `.env` to GitHub.** It's already in `.gitignore`.

---

## 🚀 Deployment

### Frontend → Vercel

```bash
cd client
npm run build
# Deploy via Vercel CLI or GitHub integration
```

### Backend → Render

```bash
# Connect your GitHub repo to Render
# Build command: npm install
# Start command: node server.js
# Add all .env variables in the Render dashboard
```

---

## 🗺️ Roadmap

- [x] Dark/Light theme
- [x] AI Chatbot (Gemini)
- [x] LeetCode live stats
- [x] GitHub live stats
- [x] Admin dashboard
- [x] Contact form with email
- [x] PWA support
- [x] Visitor counter
- [ ] Blog section with Markdown support
- [ ] Multi-language support (EN/HI)
- [ ] Project comments/likes system

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Prakash Tiwari** — Built with ❤️ while learning Full Stack Development

| Platform | Link |
|----------|------|
| 📧 **Email** | [prakashtiwarie06@gmail.com](mailto:prakashtiwarie06@gmail.com) |
| 🐙 **GitHub** | [github.com/Tiwari1782](https://github.com/Tiwari1782) |
| 💼 **LinkedIn** | [linkedin.com/in/prakash-tiwari-8900bb2b2](https://www.linkedin.com/in/prakash-tiwari-8900bb2b2/) |
| 🏅 **LeetCode** | [leetcode.com/u/pRaKaSh1782](https://leetcode.com/u/pRaKaSh1782/) |

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=Tiwari1782.portfolio)

</div>