import { useMemo, useState } from "react";
import "./Projects.css";
import { PROJECTS, TAGS } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  // Keep the original order from PROJECTS so BEETLSL items stay together
  const items = useMemo(() => {
    const base =
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.tags?.includes(filter));
    return base;
  }, [filter]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-head">
          <div>
            <h2 className="h2">Projects</h2>
            <p className="projects-sub">
              Production work and personal builds that show how I think and code.
            </p>
          </div>
        </div>

        {/* FILTERS */}
        <div className="projects-filters" aria-label="Project filters">
          {TAGS.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={filter === t}
              className={`projects-filter-btn ${
                filter === t ? "is-active" : ""
              }`}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* GRID */}
        {items.length === 0 ? (
          <p className="projects-empty">
            No projects match this filter yet. Try another tag.
          </p>
        ) : (
          <div className="projects-grid">
            {items.map((p) => (
              <article
                key={p.slug ?? p.name}
                className={`project-card ${
                  p.slug === "portfolio-site" ? "project-card--hero" : ""
                }`}
              >
                <div className="project-card-inner">
                  <header className="project-header">
                    <div className="project-header-top">
                      <div className="project-badge-stack">
                        {p.type && (
                          <span className="project-type-pill">{p.type}</span>
                        )}
                        {(p.year || p.role) && (
                          <span className="project-meta">
                            {[p.year, p.role].filter(Boolean).join(" • ")}
                          </span>
                        )}
                      </div>

                      {p.featured && (
                        <span className="project-featured-pill">Featured</span>
                      )}
                    </div>

                    <h3 className="project-title">{p.name}</h3>
                  </header>

                  {p.desc && <p className="project-desc">{p.desc}</p>}

                  <div className="project-footer">
                    {p.tags?.length > 0 && (
                      <div className="project-tags">
                        {p.tags.map((tag) => (
                          <span className="project-tag-pill" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="project-links">
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <span>GitHub</span>
                          <svg
                            className="project-link-icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.99 3.23 9.22 7.71 10.71.56.11.77-.24.77-.54
                              0-.27-.01-1.15-.02-2.09-3.14.68-3.8-1.35-3.8-1.35-.51-1.29-1.25-1.63-1.25-1.63-1.02-.7.08-.69.08-.69
                              1.13.08 1.73 1.17 1.73 1.17 1 .1 1.61-.76 1.83-1.19.1-.53.4-.89.72-1.1-2.51-.29-5.15-1.28-5.15-5.69
                              0-1.26.45-2.29 1.17-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.6 10.6 0 0 1 2.87-.39c.97 0 1.94.13 2.85.39
                              2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.17 1.84 1.17 3.1 0 4.43-2.64 5.4-5.16 5.68.41.28.77.94.77 1.9
                              0 1.37-.01 2.47-.01 2.8 0 .3.2.66.78.54 4.48-1.49 7.7-5.72 7.7-10.71C23.25 5.48 18.27.5 12 .5Z"
                            />
                          </svg>
                        </a>
                      )}

                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link--primary"
                        >
                          <span>Live Demo</span>
                          <svg
                            className="project-link-icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M5 19a1 1 0 0 1 0-2h9.59L4.3 6.71A1 1 0 0 1 5.7 5.3L16 15.59V6a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1H5Z"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
