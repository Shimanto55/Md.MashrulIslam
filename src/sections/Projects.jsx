import { useMemo, useState } from "react";
import "./Projects.css";
import { PROJECTS, TAGS } from "../data/projects";

export default function Projects(){
  const [filter, setFilter] = useState("All");

  const items = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter(p => p.tags.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-head">
          <h2 className="h2">Projects</h2>
          <p className="projects-sub">Some things I’ve built or am building.</p>
        </div>

        <div className="projects-filters" role="tablist" aria-label="Project filters">
          {TAGS.map(t => (
            <button
              key={t}
              role="tab"
              aria-selected={filter === t}
              className={`p-tag ${filter === t ? "is-active" : ""}`}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {items.map(p => (
            <article key={p.name} className="p-card">
              <div className="p-top">
                <h3 className="p-title">{p.name}</h3>
                <p className="p-desc">{p.desc}</p>
              </div>

              <div className="p-tags">
                {p.tags.map(tag => (
                  <span className="p-badge" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="p-links">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="p-link">GitHub</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="p-link">Live</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
