import { useScrollReveal } from "../../hooks/useScrollReveal";
import { timelineEntries } from "../../data/timeline";
import { GraduationCap, Code2, Star } from "lucide-react";
import "./Timeline.css";

const ICON_MAP = {
  graduation: GraduationCap,
  code: Code2,
  star: Star,
};

function TimelineEntry({ entry, index }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const Icon = ICON_MAP[entry.icon] || Star;
  const isLeft = index % 2 === 0;
  const revealClass = isLeft ? "reveal-left" : "reveal-right";

  return (
    <div
      ref={ref}
      className={`timeline__entry ${isLeft ? "timeline__entry--left" : "timeline__entry--right"} ${isVisible ? `${revealClass} visible` : revealClass}`}
    >
      {/* Connector dot */}
      <div className="timeline__dot" aria-hidden="true">
        <Icon size={16} />
      </div>

      <div className={`timeline__card glass-card timeline__card--${entry.type}`}>
        <div className="timeline__meta">
          <span className="timeline__period mono">{entry.period}</span>
          <span className={`timeline__type-badge timeline__type--${entry.type}`}>
            {entry.type}
          </span>
        </div>
        <h3 className="timeline__title">{entry.title}</h3>
        <p className="timeline__org">{entry.organization}</p>
        <p className="timeline__desc">{entry.description}</p>
        {entry.highlights && (
          <ul className="timeline__highlights">
            {entry.highlights.map((h) => (
              <li key={h}>
                <span className="timeline__hl-dot">▸</span> {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  const header = useScrollReveal();

  return (
    <section id="timeline" className="section timeline">
      <div className="container">
        {/* Header */}
        <div
          ref={header.ref}
          className={`section-header ${header.isVisible ? "reveal visible" : "reveal"}`}
        >
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            The milestones and experiences that shaped my engineering mindset.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline__track">
          <div className="timeline__line" aria-hidden="true" />
          {timelineEntries.map((entry, i) => (
            <TimelineEntry key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
