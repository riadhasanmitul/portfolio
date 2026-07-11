<div align="center">
  
# 🚀 Md Riad Hasan - Developer Portfolio

A modern, highly interactive personal developer portfolio built with React and Vite. Features a sleek dark glassmorphism design, scroll animations, and an embedded **AI Chatbot** powered by Gemini AI that can answer questions about my skills and experience.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Website-4f46e5?style=for-the-badge&logo=vercel)](https://riadhcsebd-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## ✨ Key Features

- 🎨 **Modern UI/UX**: Premium dark theme with glassmorphism effects and custom gradient accents.
- 📱 **Fully Responsive**: Flawless experience across desktop, tablet, and mobile devices.
- 🤖 **RiadBot (AI Assistant)**: Integrated Gemini AI chatbot that knows all about my projects, skills, and competitive programming achievements.
- 🏃 **Scroll Animations**: Smooth reveal animations as you navigate through different sections.
- 🏆 **Dynamic Sections**: Organized presentation of Skills, Projects, Experience, Education, and CP Achievements.
- ⚡ **High Performance**: Built with Vite for lightning-fast HMR and optimized production builds.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Custom Vanilla CSS (CSS Variables, Flexbox/Grid, Animations), Lucide React (Icons)
- **AI Integration:** Google Gemini API (`@google/genai` or direct REST API)
- **Deployment:** Vercel

---

## 🚀 Getting Started Locally

To run this project on your local machine, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/riadhasanmitul/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root of the project and add your Gemini API key for the AI Chatbot to work:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```
*(You can get a free API key from [Google AI Studio](https://aistudio.google.com/apikey))*

### 4. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, ScrollProgress
│   ├── sections/     # Hero, About, Projects, Experience, Skills, Achievements, Contact
│   └── chatbot/      # AI Chatbot widget (UI and API logic)
├── data/             # Static data files (skills.js, projects.js, etc.)
├── hooks/            # Custom React hooks (e.g., useScrollReveal)
├── App.jsx           # Main application entry point uniting all components
├── index.css         # Global styles, variables, and animations
└── main.jsx          # React DOM rendering
```

---

## 💡 About The AI Chatbot

The portfolio features a floating action button (FAB) in the bottom right corner that opens an AI chat panel. The bot is powered by the Google Gemini API and is pre-prompted with a comprehensive "System Prompt" containing all details about my education, skills, projects, and contact info. It automatically gracefully handles rate limits by falling back to different free-tier models (like `gemini-2.5-flash-lite`, `gemini-2.5-flash`, etc.).

---

## 📬 Contact & Links

- **Email:** riadhcsebd@gmail.com
- **LinkedIn:** [linkedin.com/in/riadhcsebd](https://www.linkedin.com/in/riadhcsebd/)
- **Codeforces:** [Riad_Hasan_Mitul](https://codeforces.com/profile/Riad_Hasan_Mitul)

<div align="center">
  <i>If you like this portfolio, feel free to ⭐ the repository!</i>
</div>
