import { useRef, useState, useEffect } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Trophy, Code2, Medal } from "lucide-react";
import "./Achievements.css";

const achievements = [
  {
    id: "cp-profiles",
    icon: Code2,
    category: "Competitive Programming Profiles",
    color: "#6366f1",
    items: [
      {
        label: "Codeforces",
        handle: "Riad_Hasan_Mitul",
        stats: "max: 977",
        badge: "Solved 500",
        link: "https://codeforces.com/profile/Riad_Hasan_Mitul",
        badgeColor: "#6366f1",
      },
      {
        label: "Codechef",
        handle: "riadhasan",
        stats: "max: 2★, 1427",
        badge: "Solved 81",
        link: "https://www.codechef.com/users/riadhasan",
        badgeColor: "#f59e0b",
      },
      {
        label: "Online Judges",
        handle: null,
        stats: "800+ ACM Problems solved in different Online Judges",
        badge: null,
        link: null,
        badgeColor: "#22d3ee",
      },
    ],
  },
  {
    id: "biupc-junior",
    icon: Trophy,
    category: "BIUPC Junior Programming Contest (BUBT)",
    color: "#22d3ee",
    items: [
      {
        label: "Rank",
        handle: null,
        stats: "Rank: 3  ·  Team: Null_Pointers",
        badge: "Rank 3",
        link: null,
        badgeColor: "#22d3ee",
      },
    ],
  },
  {
    id: "biupc-senior",
    icon: Medal,
    category: "BIUPC Senior Programming Contest",
    color: "#a78bfa",
    items: [
      {
        label: "Rank",
        handle: "Riad_Hasan_Mitul",
        stats: "Rank: 14 and 17",
        badge: "Top 20",
        link: null,
        badgeColor: "#a78bfa",
      },
    ],
  },
];

// Individual card that handles its own reveal
function AchievementCard({ group, delay }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Icon = group.icon;

  return (
    <div
      ref={ref}
      className={`achievements__card glass-card ${
        isVisible ? `reveal visible delay-${delay}` : "reveal"
      }`}
      style={{ "--ach-color": group.color }}
    >
      {/* Card header */}
      <div className="achievements__card-header">
        <div className="achievements__icon-wrap">
          <Icon size={22} />
        </div>
        <h3 className="achievements__category">{group.category}</h3>
      </div>

      {/* Items */}
      <ul className="achievements__items">
        {group.items.map((item, ii) => (
          <li key={ii} className="achievements__item">
            <span className="achievements__dot" />
            <div className="achievements__item-body">
              {item.label === "Codeforces" || item.label === "Codechef" ? (
                <>
                  <span className="achievements__platform">{item.label}:</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievements__handle"
                    >
                      {item.handle}
                    </a>
                  ) : (
                    <span className="achievements__handle">{item.handle}</span>
                  )}
                  <span className="achievements__stats">( {item.stats} )</span>
                  {item.badge && (
                    <span
                      className="achievements__badge"
                      style={{ "--badge-color": item.badgeColor }}
                    >
                      {item.badge}
                    </span>
                  )}
                </>
              ) : item.label === "Rank" ? (
                <>
                  <span className="achievements__stats">{item.stats}</span>
                  {item.handle && (
                    <>
                      <span className="achievements__stats"> · Handle:</span>
                      <span className="achievements__handle">{item.handle}</span>
                    </>
                  )}
                  {item.badge && (
                    <span
                      className="achievements__badge"
                      style={{ "--badge-color": item.badgeColor }}
                    >
                      {item.badge}
                    </span>
                  )}
                </>
              ) : (
                <span className="achievements__stats">{item.stats}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Achievements() {
  const header = useScrollReveal();

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        {/* Header */}
        <div
          ref={header.ref}
          className={`section-header ${
            header.isVisible ? "reveal visible" : "reveal"
          }`}
        >
          <span className="section-tag">🏆 Honors</span>
          <h2 className="section-title">Achievements &amp; Awards</h2>
          <p className="section-subtitle">
            Competitive programming milestones and contest recognitions that
            reflect my problem-solving journey.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="achievements__grid">
          {achievements.map((group, gi) => (
            <AchievementCard key={group.id} group={group} delay={gi + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
