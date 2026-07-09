import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { projects, projectCategories } from "../../data/projects";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Star } from "lucide-react";
import "./Projects.css";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const header = useScrollReveal();
  const body = useScrollReveal();

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        {/* Header */}
        <div
          ref={header.ref}
          className={`section-header ${header.isVisible ? "reveal visible" : "reveal"}`}
        >
          <span className="section-tag">What I've Built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of things I've built — from full-stack web apps to ML pipelines and IoT systems.
          </p>
        </div>

        {/* Filter bar */}
        <div className="projects__filters" role="group" aria-label="Project category filters">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className={`projects__filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={body.ref}>
          {/* Featured project */}
          {featured && (
            <div className={`projects__featured glass-card ${body.isVisible ? "reveal visible" : "reveal"}`}>
              <div className="projects__featured-badge">
                <Star size={13} /> Featured Project
              </div>
              <h3 className="projects__featured-title">{featured.title}</h3>
              <p className="projects__featured-desc">{featured.longDescription}</p>
              <div className="projects__tags">
                {featured.techStack.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="projects__links">
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    id={`featured-github-${featured.id}`}
                  >
                    <FaGithub size={16} /> View Code
                  </a>
                )}
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    id={`featured-live-${featured.id}`}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Rest of projects */}
          <div className="projects__grid">
            {rest.map((project, i) => (
              <div
                key={project.id}
                className={`projects__card glass-card ${body.isVisible ? `reveal visible delay-${Math.min(i + 1, 5)}` : "reveal"}`}
              >
                <div className="projects__card-header">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <div className="projects__card-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="projects__icon-link"
                        id={`card-github-${project.id}`}
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="projects__icon-link"
                        id={`card-live-${project.id}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__tags projects__tags--bottom">
                  {project.techStack.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="projects__empty">
              <p>No projects match this filter.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
