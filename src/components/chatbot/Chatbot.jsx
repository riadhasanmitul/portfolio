import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import "./Chatbot.css";

// ── System prompt: everything about Riad ──────────────────────────────────
const SYSTEM_PROMPT = `You are "RiadBot", a friendly AI assistant embedded in Md Riad Hasan's personal developer portfolio. Your job is to help visitors learn about Riad — his skills, projects, experience, achievements, and how to contact him.

## About Riad
- Full name: Md Riad Hasan
- Role: CSE Graduate Student & Full-Stack Developer
- University: Bangladesh University of Business and Technology (BUBT), B.Sc. in Computer Science & Engineering (2022–2026)
- Previous Education: Diploma in Telecommunication Engineering, Jessore Polytechnic Institute (2018–2022)
- Industrial Internship: Bangladesh Telecommunications Company Limited (BTCL)
- Status: Actively seeking opportunities as a Software Engineer / Full-Stack / Backend Developer

## Skills
- Languages: JavaScript, TypeScript, Python, C++
- Frontend: React, HTML5, CSS3
- Backend: Node.js, Express.js, REST APIs, JWT Authentication
- Databases: PostgreSQL, MySQL, Firebase, MongoDB
- Tools & Other: Git, Linux, IoT, Machine Learning

## Core Competencies
Data Structures & Algorithms, Object-Oriented Programming, Software Engineering, Database Management Systems, Operating Systems, Computer Networks, Software Design Principles, RESTful API Development, Responsive Web Development, Version Control (Git)

## Projects
1. BDNCart — Full-Stack E-Commerce Platform (Featured)
   Production-grade e-commerce with cart, orders, JWT auth, admin dashboard, Docker.
   Stack: React, TypeScript, Node.js, Express.js, PostgreSQL, Docker
   GitHub: https://github.com/riadhasanmitul/bdncart

2. Flood Detection — IoT Smart Flood Detection System
   Real-time IoT system monitoring water level, temperature, humidity with automated alerts.
   Stack: IoT, React Native, C++ (Arduino), MQTT
   GitHub: https://github.com/riadhasanmitul/IOT-Project

3. Developer Portfolio
   This very portfolio website — modern, responsive, dark glassmorphism design.
   Stack: React, Vite, Vanilla CSS
   GitHub: https://github.com/riadhasanmitul/portfolio

4. Diabetes Readmission Prediction (Featured)
   ML system predicting hospital readmission. XGBoost, SHAP, LIME for explainable AI.
   Stack: Python, Pandas, Scikit-learn, XGBoost, SHAP, LIME

5. Customer Segmentation
   Unsupervised ML using K-Means and DBSCAN clustering.
   Stack: Python, Pandas, Scikit-learn, Matplotlib

6. Facial Image Recognition
   Deep learning facial recognition using CNNs.
   Stack: Python, TensorFlow, Keras, OpenCV

7. Personalized Learning Path Recommender
   Graph-based recommendation system using Neo4j knowledge graphs.
   Stack: Python, Neo4j, Cypher, PyKEEN, Graph Embeddings

## Competitive Programming Achievements
- Codeforces: Riad_Hasan_Mitul | Max rating: 977 | 500+ problems solved
- Codechef: riadhasan | Max: 2-star, rating 1427 | 81 solved
- 800+ ACM problems solved across various Online Judges
- BIUPC Junior Programming Contest (BUBT): Rank 3, Team: Null_Pointers
- BIUPC Senior Programming Contest: Rank 14 and 17, Handle: Riad_Hasan_Mitul

## Contact
- GitHub: https://github.com/riadhasanmitul
- LinkedIn: https://www.linkedin.com/in/riadhcsebd/
- Email: riadhcsebd@gmail.com

## Personality Guidelines
- Be friendly, warm, and enthusiastic about Riad's work
- Keep responses concise but informative (2-4 sentences)
- Use emojis sparingly (1-2 per response max)
- If asked something unrelated to Riad or tech, politely redirect
- Always encourage visitors to reach out if they have opportunities
- Speak about Riad in third person (e.g. "Riad built..." or "He has experience in...")`;

// ── Suggestion chips ───────────────────────────────────────────────────────
const SUGGESTIONS = [
  "What projects has Riad built?",
  "What are his top skills?",
  "Is he open to work?",
  "Tell me about his CP achievements",
];

// ── Current stable models — fastest/cheapest first for free tier
const MODELS = [
  "gemini-2.5-flash-lite",   // Fastest & most budget-friendly (stable)
  "gemini-2.5-flash",        // Best price-performance (stable)
  "gemini-3.1-flash-lite",   // Frontier-class, fraction of cost (stable)
  "gemini-3.5-flash",        // Most intelligent stable model
];

const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";

// ── Direct REST API call (no SDK) ────────────────────────────────────────
async function callGemini(apiKey, model, history, userMessage) {
  const contents = [
    ...history,
    { role: "user", parts: [{ text: userMessage }] },
  ];

  const res = await fetch(`${BASE_URL}/${model}:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents,
      generationConfig: {
        temperature: 0.75,
        maxOutputTokens: 512,
      },
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    const msg = data?.error?.message || `HTTP ${res.status}`;
    throw Object.assign(new Error(msg), { status: res.status, data });
  }

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty response from API");

  const assistantMsg = { role: "model", parts: [{ text }] };
  return { text, assistantMsg };
}

async function callWithFallback(apiKey, history, userMessage) {
  let lastErr;
  for (const model of MODELS) {
    try {
      const result = await callGemini(apiKey, model, history, userMessage);
      console.log(`[RiadBot] ✅ Response from ${model}`);
      return { ...result, model };
    } catch (err) {
      const isQuota = err.status === 429;
      const isNotFound = err.status === 404;
      if (isQuota || isNotFound) {
        console.warn(`[RiadBot] ${model} failed (${err.status}), trying next…`);
        lastErr = err;
        continue;
      }
      throw err; // non-recoverable error
    }
  }
  throw lastErr;
}

// ── Component ─────────────────────────────────────────────────────────────
export default function Chatbot() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  // No key configured → render nothing (no error shown to visitors)
  if (!apiKey) return null;

  return <ChatbotWidget apiKey={apiKey} />;
}

function ChatbotWidget({ apiKey }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "👋 Hi! I'm **RiadBot** — I know everything about Riad's portfolio. Ask me about his projects, skills, achievements, or how to contact him!",
      id: 0,
    },
  ]);
  // Gemini conversation history (role: user/model format)
  const historyRef = useRef([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = async (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed, id: Date.now() }]);
    setInput("");
    setLoading(true);

    try {
      const { text: reply, assistantMsg } = await callWithFallback(
        apiKey,
        historyRef.current,
        trimmed
      );

      // Persist conversation history for context
      historyRef.current = [
        ...historyRef.current,
        { role: "user", parts: [{ text: trimmed }] },
        assistantMsg,
      ];

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: reply, id: Date.now() + 1 },
      ]);
    } catch (err) {
      console.error("[RiadBot] Error:", err);
      const friendly =
        err?.status === 429
          ? "⚠️ All free-tier models are currently rate-limited. Please try again in a moment!"
          : `⚠️ ${err?.message?.slice(0, 150) || "Something went wrong."}`;
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: friendly, id: Date.now() + 1, error: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Render **bold** markdown
  const renderText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <>
      {/* ── Floating Action Button ── */}
      <button
        id="chatbot-toggle"
        className={`chatbot__fab ${open ? "chatbot__fab--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI chat assistant"
      >
        {open ? (
          <X size={22} />
        ) : (
          <>
            <MessageCircle size={22} />
            <span className="chatbot__fab-badge">AI</span>
          </>
        )}
      </button>

      {/* ── Chat Panel ── */}
      <div className={`chatbot__panel ${open ? "chatbot__panel--open" : ""}`}>
        {/* Header */}
        <div className="chatbot__header">
          <div className="chatbot__header-info">
            <div className="chatbot__avatar-wrap">
              <Bot size={18} />
              <span className="chatbot__status-dot" />
            </div>
            <div>
              <p className="chatbot__name">RiadBot</p>
              <p className="chatbot__subtitle">
                <Sparkles size={10} /> Powered by Gemini AI
              </p>
            </div>
          </div>
          <button
            className="chatbot__close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot__messages" role="log" aria-live="polite">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chatbot__msg chatbot__msg--${msg.role} ${
                msg.error ? "chatbot__msg--error" : ""
              }`}
            >
              {msg.role === "bot" && (
                <div className="chatbot__msg-avatar">
                  <Bot size={14} />
                </div>
              )}
              <div className="chatbot__bubble">{renderText(msg.text)}</div>
              {msg.role === "user" && (
                <div className="chatbot__msg-avatar chatbot__msg-avatar--user">
                  <User size={14} />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="chatbot__msg chatbot__msg--bot">
              <div className="chatbot__msg-avatar">
                <Bot size={14} />
              </div>
              <div className="chatbot__bubble chatbot__typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion chips — only before first user message */}
        {messages.length === 1 && (
          <div className="chatbot__suggestions">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="chatbot__chip"
                onClick={() => sendMessage(s)}
                disabled={loading}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          className="chatbot__input-wrap"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <input
            ref={inputRef}
            id="chatbot-input"
            className="chatbot__input"
            type="text"
            placeholder="Ask me anything about Riad…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            maxLength={500}
            aria-label="Chat input"
          />
          <button
            type="submit"
            id="chatbot-send"
            className="chatbot__send"
            disabled={!input.trim() || loading}
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </>
  );
}
