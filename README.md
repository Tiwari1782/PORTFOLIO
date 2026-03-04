<div align="center">

# 🚀 Prakash Tiwari — Personal Portfolio

### A modern, full-stack developer portfolio built with the MERN Stack

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-00d4ff?style=for-the-badge)](https://your-portfolio-url.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Tiwari1782-181717?style=for-the-badge&logo=github)](https://github.com/Tiwari1782)
[![LeetCode](https://img.shields.io/badge/LeetCode-pRaKaSh1782-FFA116?style=for-the-badge&logo=leetcode)](https://leetcode.com/u/pRaKaSh1782/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/your-linkedin)

<br />

![Portfolio Preview](https://raw.githubusercontent.com/Tiwari1782/WanderLust/main/Screenshots/Home-Page.png)

*⚡ Built with React.js, Node.js, Express.js, MongoDB & Gemini AI*

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📸 Screenshots](#-screenshots)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Environment Variables](#️-environment-variables)
- [📁 Project Structure](#-project-structure)
- [🤖 AI Chatbot](#-ai-chatbot)
- [📊 Live Integrations](#-live-integrations)
- [🔐 Admin Dashboard](#-admin-dashboard)
- [📱 PWA Support](#-pwa-support)
- [🎮 Easter Eggs](#-easter-eggs)
- [📄 License](#-license)
- [🤝 Contact](#-contact)

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
| 🔝 **Scroll to Top** | Floating button appears on scroll |
| 📱 **WhatsApp Button** | One-click WhatsApp chat |
| 📄 **Resume Modal** | View & download resume in-site |
| 🏷️ **Available Badge** | Status badge for recruiters |

### 🖥️ Sections
| Section | Description |
|---------|-------------|
| 🏠 **Hero** | Animated intro with typing SVG & CTA buttons |
| 👤 **About** | Bio, quick stats & animated counters |
| 🛠️ **Services** | 6 service cards with hover effects |
| 💻 **Skills** | Tech stack grid with icons |
| 🏅 **LeetCode** | Live stats, progress bars, heatmap |
| 📂 **Projects** | Category filter, thumbnails, detail pages |
| 🐙 **GitHub** | Live contribution graph, stats, streak |
| 🎓 **Education** | Timeline with institution details |
| 🏆 **Achievements** | Certificates with links |
| 💬 **Testimonials** | Carousel with navigation dots |
| 💡 **Fun Facts** | Personal facts with Font Awesome icons |
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
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=flat-square&logo=fontawesome&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

### AI & APIs
![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat-square&logo=google&logoColor=white)
![LeetCode API](https://img.shields.io/badge/LeetCode_API-FFA116?style=flat-square&logo=leetcode&logoColor=black)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=flat-square&logo=github&logoColor=white)

---

## 📸 Screenshots

<div align="center">

### 🌙 Dark Mode
| Hero Section | Projects Section |
|:---:|:---:|
| ![Hero Dark](https://via.placeholder.com/400x250?text=Hero+Dark) | ![Projects Dark](https://via.placeholder.com/400x250?text=Projects+Dark) |

### ☀️ Light Mode
| LeetCode Stats | AI Chatbot |
|:---:|:---:|
| ![LeetCode](https://via.placeholder.com/400x250?text=LeetCode+Stats) | ![AI Chat](https://via.placeholder.com/400x250?text=AI+Chatbot) |

</div>

> 📷 *Replace placeholder images with actual screenshots of your portfolio*

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ → [Download](https://nodejs.org/)
- **MongoDB** → [MongoDB Atlas (Free)](https://www.mongodb.com/atlas)
- **Gemini API Key** → [Google AI Studio (Free)](https://aistudio.google.com/)
- **Git** → [Download](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Tiwari1782/portfolio.git
cd portfolio

# 2. Install server dependencies
cd server
npm install

# 3. Install client dependencies
cd ../client
npm install

# 4. Setup environment variables (see below)
cd ../server
cp .env.example .env
# Edit .env with your values

# 5. Seed the database
node seed.js

# 6. Start development servers
# Terminal 1 — Backend
cd server
npm run dev

# Terminal 2 — Frontend
cd client
npm run dev
```

### Access the app

| Service | URL |
|---------|-----|
| Frontend | `http://localhost:5173` |
| Backend API | `http://localhost:5000` |
| Admin Login | `http://localhost:5173/admin` |

---

## ⚙️ Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/portfolio
JWT_SECRET=your_super_secret_jwt_key
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your_gmail_app_password
GEMINI_API_KEY=your_gemini_api_key
```

> ⚠️ **Important:** Never commit `.env` to GitHub. It's already in `.gitignore`.

### How to get each key:

| Variable | How to Get |
|----------|------------|
| `MONGO_URI` | Create free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas) |
| `JWT_SECRET` | Any random strong string |
| `EMAIL_USER` | Your Gmail address |
| `EMAIL_PASS` | [Gmail App Password](https://myaccount.google.com/apppasswords) (NOT your regular password) |
| `GEMINI_API_KEY` | Free at [Google AI Studio](https://aistudio.google.com/) → Get API Key |

---

## 📁 Project Structure

```
portfolio/
├── client/                     # React Frontend
│   ├── public/
│   │   ├── photo.jpg           # Profile photo
│   │   ├── resume.pdf          # Downloadable resume
│   │   ├── manifest.json       # PWA manifest
│   │   └── icon-192.png        # PWA icons
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js        # Axios instance
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Navigation bar
│   │   │   ├── Footer.jsx      # Footer with socials
│   │   │   ├── Preloader.jsx   # Loading animation
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── ResumeModal.jsx # Resume viewer modal
│   │   │   ├── ScrollToTop.jsx # Scroll to top button
│   │   │   ├── WhatsAppButton.jsx
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── AIChatBot.jsx   # 🤖 AI Assistant
│   │   │   ├── AnimatedCounter.jsx
│   │   │   ├── VisitorCounter.jsx
│   │   │   ├── EasterEgg.jsx   # 🎮 Konami code
│   │   │   └── LoadSpeed.jsx   # Page load timer
│   │   ├── context/
│   │   │   └── ThemeContext.jsx # Dark/Light mode
│   │   ├── sections/
│   │   │   ├── Hero.jsx        # Landing section
│   │   │   ├── About.jsx       # About me
│   │   │   ├── Services.jsx    # What I do
│   │   │   ├── Skills.jsx      # Tech stack
│   │   │   ├── CodingProfiles.jsx # LeetCode stats
│   │   │   ├── Projects.jsx    # Project cards
│   │   │   ├── GitHub.jsx      # GitHub activity
│   │   │   ├── Education.jsx   # Education timeline
│   │   │   ├── Achievements.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── FunFacts.jsx
│   │   │   └── Contact.jsx     # Contact form
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Main page
│   │   │   ├── ProjectDetail.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/                     # Express Backend
│   ├── models/
│   │   ├── Project.js
│   │   ├── Achievement.js
│   │   ├── Contact.js
│   │   ├── Admin.js
│   │   └── Visitor.js
│   ├── routes/
│   │   ├── projects.js
│   │   ├── achievements.js
│   │   ├── contact.js
│   │   ├── auth.js
│   │   ├── visitors.js
│   │   └── ai.js              # 🤖 Gemini AI route
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── seed.js                 # Database seeder
│   ├── server.js               # Entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🤖 AI Chatbot

The portfolio includes a **personal AI assistant** powered by **Google Gemini API**.

### How it works:
```
Visitor asks a question
       ↓
Frontend sends to /api/ai/chat
       ↓
Backend injects YOUR context + question → Gemini API
       ↓
Gemini responds as "PrakashAI"
       ↓
Chat widget displays the answer
```

### Features:
- 🧠 Knows everything about you (skills, projects, achievements)
- 💡 Suggested quick questions
- 🧹 Clear chat button
- ➖ Minimize/expand
- 🛡️ Rate limiting (10 req/min per IP)
- 🔄 Model fallback (tries multiple Gemini models)
- ⌨️ Typing indicator with bouncing dots

### Example:
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
| 💻 **Top Languages** | Most used languages | `github-readme-stats` |
| 🏅 **LeetCode Solved** | Easy/Medium/Hard breakdown | LeetCode GraphQL API |
| 📊 **LeetCode Ranking** | Global ranking | LeetCode GraphQL API |
| 🗓️ **LeetCode Heatmap** | Submission activity | `leetcard.jacoblin.cool` |
| 👁️ **Visitor Counter** | Total site visitors | Custom MongoDB counter |

---

## 🔐 Admin Dashboard

Access the admin panel at `/admin` to manage your portfolio content without touching code.

### Capabilities:
- ➕ Add new projects
- ✏️ Edit existing projects
- 🗑️ Delete projects
- ➕ Add new achievements
- ✏️ Edit achievements
- 🗑️ Delete achievements
- 📬 View contact form submissions
- 🔒 Protected with JWT authentication

### First-time setup:
```bash
# Create admin account via API
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "your_password"}'
```

---

## 📱 PWA Support

The portfolio can be **installed as a mobile/desktop app**!

- ✅ Manifest file configured
- ✅ Theme color matching
- ✅ Standalone display mode
- ✅ Custom app icons

Users will see an **"Install App"** prompt on supported browsers.

---

## 🎮 Easter Eggs

Hidden surprises for curious visitors:

| Easter Egg | How to Trigger |
|-----------|---------------|
| 🎮 **Konami Code** | Press ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA on keyboard |
| ⚡ **Load Speed** | Shown in footer automatically |
| 🔢 **Visitor Count** | Floating counter on bottom-left |

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
# Set environment variables in Render dashboard
# Build command: npm install
# Start command: node server.js
```

### Environment variables to set on hosting:
Same as the `.env` file — add them in your hosting dashboard.

---

## 📈 Performance

| Metric | Score |
|--------|-------|
| ⚡ Lighthouse Performance | 90+ |
| ♿ Accessibility | 95+ |
| 🔍 SEO | 100 |
| 📱 Mobile Friendly | ✅ Yes |
| 🎨 Dark Mode | ✅ Yes |
| 📦 PWA Ready | ✅ Yes |

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
- [ ] Analytics dashboard

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contact

<div align="center">

| Platform | Link |
|----------|------|
| 📧 **Email** | [prakashtiwarie06@gmail.com](mailto:prakashtiwarie06@gmail.com) |
| 🐙 **GitHub** | [github.com/Tiwari1782](https://github.com/Tiwari1782) |
| 💼 **LinkedIn** | [linkedin.com/in/your-linkedin](https://linkedin.com/in/your-linkedin) |
| 🏅 **LeetCode** | [leetcode.com/u/pRaKaSh1782](https://leetcode.com/u/pRaKaSh1782/) |

</div>

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ by **Prakash Tiwari**

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=Tiwari1782.portfolio)

</div>