import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { skillCategories } from "../../data/skills";
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiPostgresql, SiMysql,
  SiGit, SiLinux, SiRaspberrypi, SiScikitlearn,SiFirebase,SiMongodb
} from "react-icons/si";
import "./Skills.css";

const ICON_MAP = {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiPostgresql, SiMysql,
  SiGit, SiLinux, SiRaspberrypi, SiScikitlearn,SiFirebase,SiMongodb
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");
  const header = useScrollReveal();
  const tabs = useScrollReveal();
  const grid = useScrollReveal();

  const activeCategory = skillCategories.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        {/* Header */}
        <div
          ref={header.ref}
          className={`section-header ${header.isVisible ? "reveal visible" : "reveal"}`}
        >
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A curated toolkit refined through coursework, projects, and continuous self-learning.
          </p>
        </div>

        {/* Tab bar */}
        <div
          ref={tabs.ref}
          className={`skills__tabs ${tabs.isVisible ? "reveal visible" : "reveal"}`}
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              id={`tab-${cat.id}`}
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`skills__tab ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          ref={grid.ref}
          className="skills__grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
        >
          {activeCategory?.skills.map((skill, i) => {
            const Icon = ICON_MAP[skill.icon];
            return (
              <div
                key={skill.name}
                className={`skills__card glass-card ${grid.isVisible ? `reveal visible delay-${Math.min(i + 1, 5)}` : "reveal"}`}
                style={{ "--skill-color": skill.color }}
              >
                <div className="skills__icon-wrap">
                  {Icon && <Icon size={36} style={{ color: skill.color }} />}
                </div>
                <span className="skills__name">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
