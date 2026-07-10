import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowDown, Download } from "lucide-react";
import { useTypewriter } from "../../hooks/useTypewriter";
import "./Hero.css";

const ROLES = [
  "Full-Stack Developer",
  "Backend Engineer",
  "React Developer",
  "Problem Solver",
  "CS Graduate Student",
];

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/riadhasanmitul", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/riadhcsebd/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:riadhcsebd@gmail.com", label: "Email" },
];

export default function Hero() {
  const typedRole = useTypewriter(ROLES);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = (e) => {
    e.preventDefault();
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      {/* Animated grid background */}
      <div className="hero__grid" aria-hidden="true" />
      {/* Gradient orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="container hero__content">
        {/* Status badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for opportunities
        </div>

        {/* Greeting */}
        <p className="hero__greeting mono">
          <span className="hero__greeting-arrow">{">"}</span> Hello, world! I'm
        </p>

        {/* Name */}
        <h1 className="hero__name">Md Riad Hasan</h1>

        {/* Typewriter role */}
        <div className="hero__role-wrap">
          <span className="hero__role-prefix mono">$ </span>
          <span className="hero__role gradient-text">{typedRole}</span>
          <span className="hero__cursor" aria-hidden="true">|</span>
        </div>

        {/* Tagline */}
        <p className="hero__tagline">
          CSE Graduate student from <strong>BUBT</strong> passionate about building{" "}
          <strong>scalable, maintainable software</strong> and solving real-world problems
          through clean, efficient code.
        </p>

        {/* CTAs */}
        <div className="hero__ctas">
          <button className="btn btn-primary" id="view-projects" onClick={scrollToProjects}>
            View My Work
            <ArrowDown size={16} />
          </button>
          <a href="/cv.pdf" download className="btn btn-secondary" id="hero-download-cv">
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Socials */}
        <div className="hero__socials">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hero__social"
              id={`social-${label.toLowerCase()}`}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button className="hero__scroll-hint" onClick={scrollToAbout} aria-label="Scroll down">
          <span className="hero__scroll-text">Scroll to explore</span>
          <ArrowDown size={18} className="hero__scroll-arrow" />
        </button>
      </div>

      {/* Floating code decoration */}
      <div className="hero__code-deco mono" aria-hidden="true">
        <div className="hero__code-line">
          <span className="c-keyword">const</span>{" "}
          <span className="c-var">developer</span>{" "}
          <span className="c-op">=</span>{" "}
          <span className="c-brace">{"{"}</span>
        </div>
        <div className="hero__code-line hero__code-indent">
          <span className="c-key">name</span>
          <span className="c-op">:</span>{" "}
          <span className="c-string">"Md Riad Hasan"</span>
          <span>,</span>
        </div>
        <div className="hero__code-line hero__code-indent">
          <span className="c-key">role</span>
          <span className="c-op">:</span>{" "}
          <span className="c-string">"Software Engineer"</span>
          <span>,</span>
        </div>
        <div className="hero__code-line hero__code-indent">
          <span className="c-key">university</span>
          <span className="c-op">:</span>{" "}
          <span className="c-string">"BUBT"</span>
          <span>,</span>
        </div>
        <div className="hero__code-line hero__code-indent">
          <span className="c-key">passionate</span>
          <span className="c-op">:</span>{" "}
          <span className="c-bool">true</span>
        </div>
        <div className="hero__code-line">
          <span className="c-brace">{"}"}</span>
          <span>;</span>
        </div>
      </div>
    </section>
  );
}
