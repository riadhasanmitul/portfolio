import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, "#hero")}>
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">Riad</span>
          <span className="navbar__logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            id="theme-toggle"
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/cv.pdf" // TODO: Replace with your actual CV path
            download
            className="btn btn-primary navbar__cv-btn"
            id="download-cv"
          >
            Download CV
          </a>

          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`navbar__mobile ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/cv.pdf"
          download
          className="btn btn-primary navbar__mobile-cv"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
