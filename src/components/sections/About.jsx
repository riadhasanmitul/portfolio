import { useScrollReveal } from "../../hooks/useScrollReveal";
import { coreCompetencies } from "../../data/skills";
import { Layers, Zap, Server, Code2 } from "lucide-react";
import "./About.css";

const PASSIONS = [
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Designing systems that grow gracefully under load with clean separation of concerns.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing readable, maintainable code following SOLID principles and best practices.",
  },
  {
    icon: Server,
    title: "Full-Stack & Backend",
    desc: "Building robust REST APIs and scalable backends while crafting responsive UIs.",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    desc: "Staying current with modern technologies and applying them to real-world problems.",
  },
];

export default function About() {
  const header = useScrollReveal();
  const bio = useScrollReveal();
  const cards = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        {/* Header */}
        <div
          ref={header.ref}
          className={`section-header ${header.isVisible ? "reveal visible" : "reveal"}`}
        >
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Curious engineer, problem-solver, and lifelong learner.
          </p>
        </div>

        {/* Bio + competencies */}
        <div
          ref={bio.ref}
          className={`about__bio-wrap ${bio.isVisible ? "reveal visible" : "reveal"}`}
        >
          <div className="about__bio-text">
            <p>
              I'm a <strong>final-year Computer Science & Engineering student</strong> with a
              strong foundation in Data Structures, Algorithms, OOP, DBMS, Operating Systems,
              Computer Networks, and Software Design Principles.
            </p>
            <p>
              Proficient in <span className="highlight">JavaScript</span>,{" "}
              <span className="highlight">TypeScript</span>,{" "}
              <span className="highlight">React</span>,{" "}
              <span className="highlight">Node.js</span>,{" "}
              <span className="highlight">PostgreSQL</span>, and more — I bring both frontend
              finesse and backend depth to the table.
            </p>
            <p>
              I also have hands-on experience with{" "}
              <span className="highlight">machine learning</span> through academic projects
              involving data preprocessing, model development, and evaluation, and I've
              explored <span className="highlight">IoT</span> system development.
            </p>
            <p>
              I'm actively seeking an opportunity to contribute as a{" "}
              <strong>Software Engineer</strong> while expanding my expertise in full-stack and
              backend development.
            </p>

            {/* Core competencies */}
            <div className="about__competencies">
              <h3 className="about__competencies-title mono">// Core Competencies</h3>
              <ul className="about__competency-list">
                {coreCompetencies.map((c) => (
                  <li key={c} className="about__competency-item">
                    <span className="about__comp-arrow">▸</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Avatar placeholder */}
          <div className="about__avatar-wrap">
            <div className="about__avatar">
              <img src="/avatar.png" alt="Md Riad Hasan" />
            </div>
            <div className="about__avatar-ring" />
          </div>
        </div>

        {/* Passion cards */}
        <div
          ref={cards.ref}
          className={`about__passions ${cards.isVisible ? "" : ""}`}
        >
          {PASSIONS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`about__passion-card glass-card ${cards.isVisible ? `reveal visible delay-${i + 1}` : "reveal"}`}
              >
                <div className="about__passion-icon">
                  <Icon size={22} />
                </div>
                <h3 className="about__passion-title">{p.title}</h3>
                <p className="about__passion-desc">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
