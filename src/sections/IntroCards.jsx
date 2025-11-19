import "./IntroCards.css";

export default function IntroCards() {
  const cards = [
    {
      title: "Who I Am",
      desc: "CSE graduate & MERN stack developer building clean, maintainable web apps.",
      icon: "👨‍💻",
      href: "#about",
      cta: "Read my story →",
      tags: ["CSE Graduate", "Dhaka", "Web Developer"],
    },
    {
      title: "What I Build",
      desc: "Single-page apps, dashboards, and full-stack MERN projects for real clients.",
      icon: "⚙️",
      href: "#projects",
      cta: "See my work →",
      tags: ["React", "MERN", "REST APIs"],
    },
    {
      title: "Where I’m Going",
      desc: "Moving into security-minded development with a focus on writing safer software.",
      icon: "🛡️",
      href: "#labs",
      cta: "Security journey →",
      tags: ["Cybersecurity", "Secure Code", "Linux & Tools"],
    },
  ];

  return (
    <section className="section intro-section" aria-labelledby="intro-heading">
      <div className="container">
        <header className="intro-header">
          <span className="intro-kicker">At a glance</span>
          <h2 id="intro-heading" className="intro-heading">
            Who I am, what I do, and where I’m headed.
          </h2>
          <p className="intro-subtitle">
            A quick snapshot of my background, the kind of projects I work on, and
            the direction I’m taking with security-focused development.
          </p>
        </header>

        <div className="intro-grid">
          {cards.map((c, idx) => (
            <a
              key={c.title}
              href={c.href}
              className="intro-card"
              aria-label={c.title}
              style={{ animationDelay: `${0.06 + idx * 0.08}s` }}
            >
              <div className="intro-card-inner">
                <div className="intro-card-top">
                  <div className="intro-icon-wrap">
                    <span className="intro-icon" aria-hidden="true">
                      {c.icon}
                    </span>
                  </div>
                  <h3 className="intro-title">{c.title}</h3>
                </div>

                <p className="intro-desc">{c.desc}</p>

                <div className="intro-tags">
                  {c.tags.map((tag) => (
                    <span key={tag} className="intro-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="intro-cta">
                  {c.cta}
                  <span className="intro-cta-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
