import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Heart } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          <span className="mono">{"<"}</span>
          Built with{" "}
          <Heart size={14} className="footer__heart" />
          {" "}by{" "}
          <span className="gradient-text footer__name">Md Riad Hasan</span>
          <span className="mono">{" />"}</span>
          {" "}· {year}
        </p>
        <div className="footer__socials">
          <a href="https://github.com/riadhasanmitul" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer__social-link">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/riadhcsebd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__social-link">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:riadhcsebd@gmail.com" aria-label="Email" className="footer__social-link">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
