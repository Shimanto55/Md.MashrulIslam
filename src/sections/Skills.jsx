import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const DATA = {
  Frontend: [
    {
      title: "Interface & UX",
      usage: "Daily driver",
      usageLevel: 95,
      summary:
        "I build modern, responsive interfaces that feel clean and easy to use.",
      tools: ["HTML5", "CSS3", "Responsive layouts", "Accessibility basics"],
      canDo: [
        "Create pixel-clean, responsive layouts",
        "Design sections that are clear and readable",
        "Use semantic HTML for better accessibility",
        "Handle basic animations and micro-interactions",
      ],
    },
    {
      title: "React Ecosystem",
      usage: "Primary frontend stack",
      usageLevel: 90,
      summary:
        "Most of my projects are built with React and modern JavaScript.",
      tools: ["React", "JavaScript (ES6+)", "Hooks", "React Router"],
      canDo: [
        "Build SPA-style pages with routing",
        "Manage state with hooks and props cleanly",
        "Integrate REST APIs with loading / error states",
        "Structure components so they stay maintainable",
      ],
    },
  ],
  "Backend & Tools": [
    {
      title: "Backend & APIs",
      usage: "Support stack",
      usageLevel: 70,
      summary:
        "I work with Node.js and Express to create simple, practical APIs.",
      tools: ["Node.js", "Express (basic)", "REST APIs", "MongoDB (basic)"],
      canDo: [
        "Build basic REST endpoints for projects",
        "Connect frontend apps to JSON APIs",
        "Handle simple CRUD operations in MongoDB",
        "Structure routes and controllers clearly",
      ],
    },
    {
      title: "Dev Workflow",
      usage: "Used in every project",
      usageLevel: 85,
      summary: "I use Git, GitHub and sensible project structure every day.",
      tools: ["Git", "GitHub", "Project structure", "Basic testing mindset"],
      canDo: [
        "Use Git branches and pull requests",
        "Collaborate using GitHub",
        "Keep code organised into clear modules",
        "Write code that’s easier to debug and extend",
      ],
    },
  ],
  "Security & Mindset": [
    {
      title: "Secure Coding Habits",
      usage: "Built into my work",
      usageLevel: 80,
      summary:
        "Even at my current level, I try not to ship code with obvious security risks.",
      tools: ["Auth & JWT", "Input validation", "Sanitization"],
      canDo: [
        "Design sign-up / login with safer handling of credentials",
        "Validate and sanitize inputs to reduce attack surface",
        "Avoid obvious insecure patterns in code",
        "Think about how data flows through the app",
      ],
    },
    {
      title: "Cybersecurity Learning Path",
      usage: "Actively learning",
      usageLevel: 65,
      summary:
        "I’m studying cybersecurity to understand how attackers think and how to defend better.",
      tools: ["OWASP concepts", "Secure coding articles", "Hands-on practice"],
      canDo: [
        "Study OWASP ideas and apply them in projects",
        "Review code with security in mind, not just features",
        "Experiment with secure patterns in personal projects",
        "Ask “how could this be abused?” while designing features",
      ],
    },
  ],
};

const TABS = Object.keys(DATA);

export default function Skills() {
  const [tab, setTab] = useState(TABS[0]);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Trigger animations when section enters viewport
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
          <h2 className="h2">Skills &amp; Tech Stack</h2>
          <p className="skills-sub">
            How I work across the stack today, and where I’m putting extra focus.
          </p>
        </div>

        {/* Tabs */}
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

        {/* Stack cards */}
        <div className="skills-grid">
          {DATA[tab].map((stack, idx) => (
            <article
              key={stack.title}
              className={`skill-card ${visible ? "skill-card-visible" : ""}`}
              style={{ animationDelay: `${0.05 + idx * 0.08}s` }}
            >
              <div className="skill-top">
                <div>
                  <h3 className="skill-name">{stack.title}</h3>
                  <p className="skill-summary">{stack.summary}</p>
                </div>
                <span className="skill-usage-pill">{stack.usage}</span>
              </div>

              {/* Tools / tags */}
              <div className="skill-tools">
                {stack.tools.map((tool) => (
                  <span key={tool} className="skill-tool-tag">
                    {tool}
                  </span>
                ))}
              </div>

              {/* “I can…” bullet list */}
              <ul className="skill-can">
                {stack.canDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {/* Usage focus bar – animated, but NOT “percentage of skill” */}
              <div className="usage-wrap">
                <span className="usage-label">Usage focus</span>
                <div className="usage-bar">
                  <div
                    className={`usage-fill ${visible ? "usage-animate" : ""}`}
                    style={{ "--to": `${stack.usageLevel}%` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Learning focus strip */}
        <div className="skills-focus">
          <div className="skills-focus-block">
            <span className="skills-focus-label">Currently using</span>
            <p className="skills-focus-text">
              React &amp; MERN to build real-world style projects with clean UI,
              REST APIs, and code that’s organised for maintenance.
            </p>
          </div>
          <div className="skills-focus-block">
            <span className="skills-focus-label">Currently learning</span>
            <p className="skills-focus-text">
              Cybersecurity fundamentals, secure coding practices, and how to
              design features with security in mind from day zero—not as an
              afterthought.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
