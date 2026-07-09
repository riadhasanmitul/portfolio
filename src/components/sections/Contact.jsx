import { useScrollReveal } from "../../hooks/useScrollReveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const header = useScrollReveal();
  const content = useScrollReveal();

  return (
    <section id="contact" className="section contact">
      <div className="container">
        {/* Header */}
        <div
          ref={header.ref}
          className={`section-header ${header.isVisible ? "reveal visible" : "reveal"}`}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have an opportunity, a project idea, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div
          ref={content.ref}
          className={`contact__wrap ${content.isVisible ? "reveal visible" : "reveal"}`}
        >
          {/* CTA card */}
          <div className="contact__cta-card glass-card">
            <div className="contact__cta-orb" aria-hidden="true" />
            <h3 className="contact__cta-title">
              Let's build something{" "}
              <span className="gradient-text">great together</span>
            </h3>
            <p className="contact__cta-text">
              I'm actively seeking software engineering opportunities — full-time roles,
              internships, or impactful projects. Drop me a message and let's connect.
            </p>

            <a
              href="mailto:riadhcsebd@gmail.com"
              className="btn btn-primary contact__email-btn"
              id="contact-email-cta"
            >
              Say Hello <ArrowRight size={16} />
            </a>
          </div>

          {/* Links column */}
          <div className="contact__links-col">
            <div className="contact__detail-item">
              <div className="contact__detail-icon"><Mail size={20} /></div>
              <div>
                <p className="contact__detail-label">Email</p>
                <a href="mailto:riadhcsebd@gmail.com" className="contact__detail-value">
                  riadhcsebd@gmail.com
                </a>
              </div>
            </div>

            <div className="contact__detail-item">
              <div className="contact__detail-icon"><MapPin size={20} /></div>
              <div>
                <p className="contact__detail-label">Location</p>
                <p className="contact__detail-value">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="contact__social-section">
              <p className="contact__social-label">Find me on</p>
              <div className="contact__socials">
                <a
                  href="https://github.com/riadhasanmitul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-card"
                  id="contact-github"
                >
                  <FaGithub size={22} />
                  <div>
                    <p className="contact__social-name">GitHub</p>
                    <p className="contact__social-handle">@riadhasanmitul</p>
                  </div>
                  <ArrowRight size={14} className="contact__social-arrow" />
                </a>
                <a
                  href="https://www.linkedin.com/in/riadhcsebd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-card"
                  id="contact-linkedin"
                >
                  <FaLinkedin size={22} />
                  <div>
                    <p className="contact__social-name">LinkedIn</p>
                    <p className="contact__social-handle">riadhcsebd</p>
                  </div>
                  <ArrowRight size={14} className="contact__social-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
