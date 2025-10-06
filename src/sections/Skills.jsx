import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const DATA = {
  Frontend: [
    { name: "React", level: 85 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
  ],
  "Backend & Tools": [
    { name: "Node.js (basic)", level: 55 },
    { name: "Express (basic)", level: 50 },
    { name: "MongoDB (basic)", level: 45 },
    { name: "Git & GitHub", level: 80 },
  ],
  "Security Basics": [
    { name: "Auth & JWT", level: 60 },
    { name: "Validation / Sanitization", level: 55 },
    { name: "OWASP Fundamentals", level: 45 },
  ],
};

const TABS = Object.keys(DATA);

export default function Skills() {
  const [tab, setTab] = useState(TABS[0]);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Trigger bar animation when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container" ref={sectionRef}>
        <div className="skills-head">
          <h2 className="h2">Skills</h2>
          <p className="skills-sub">A snapshot of my current strengths and focus areas.</p>
        </div>

        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {TABS.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              className={`skills-tab ${tab === t ? "is-active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {DATA[tab].map((s) => (
            <div key={s.name} className="skill-card">
              <div className="skill-top">
                <span className="skill-name">{s.name}</span>
                <span className="skill-val">{s.level}%</span>
              </div>
              <div className="bar">
                <div
                  className={`bar-fill ${visible ? "bar-animate" : ""}`}
                  style={{ "--to": `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="skills-note">
          ✦ I regularly learn & improve. Levels are rough guides, not limits.
        </div>
      </div>
    </section>
  );
}
