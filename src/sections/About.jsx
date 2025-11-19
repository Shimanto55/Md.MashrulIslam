import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-wrap">
        {/* LEFT: TEXT */}
        <div className="about-text">
          <span className="about-kicker">About Me</span>
          <h2 className="h2 about-heading">
            MERN stack developer with a strong eye for clean UI, secure code, and modern web architecture.
          </h2>

          <p className="about-p">
            I’m <strong>Md. Mashrul Islam</strong>, a <strong>CSE graduate</strong> and a developer
            who enjoys building fast, intuitive, and modern web applications. I work mainly with the{" "}
            <strong>MERN stack</strong> and <strong>React</strong>, crafting interfaces that feel
            polished, accessible, and user-friendly.
          </p>

          <p className="about-p">
            I follow proper development practices — clean structure, reusable components, maintainable
            code, and proper state management. My goal is simple: every project should be easy to
            understand, easy to scale, and enjoyable to use.
          </p>

          <p className="about-p">
            I’m also deeply interested in <strong>cybersecurity</strong>. I actively explore secure
            coding principles, authentication flows, input validation, safe data handling, and
            fundamental threat models. I’m not just “learning basics” — I’m building the mindset of a
            security-aware developer who writes software that’s harder to exploit.
          </p>

          {/* QUICK META */}
          <div className="about-meta">
            <div className="about-meta-item">
              <span className="about-meta-label">Based in</span>
              <span className="about-meta-value">Dhaka, Bangladesh</span>
            </div>
            <div className="about-meta-item">
              <span className="about-meta-label">Specialty</span>
              <span className="about-meta-value">React · MERN · REST APIs</span>
            </div>
            <div className="about-meta-item">
              <span className="about-meta-label">Learning</span>
              <span className="about-meta-value">Cybersecurity · Secure coding</span>
            </div>
          </div>

          {/* SKILL PILLS */}
          <div className="about-pills">
            <span className="pill">React</span>
            <span className="pill">JavaScript (ES6+)</span>
            <span className="pill">MERN Stack</span>
            <span className="pill">REST APIs</span>
            <span className="pill">MongoDB</span>
            <span className="pill">Node.js</span>
            <span className="pill">Git & GitHub</span>
            <span className="pill">Secure Coding</span>
            <span className="pill">Cybersecurity (Learning)</span>
          </div>

          {/* CTA */}
          <div className="about-cta">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT: PHOTO */}
        <div className="about-photo">
          <figure className="photo-frame">
            {/* Make sure /public/me.jpeg exists */}
            <img
              src="public/me.jpeg"
              alt="Md. Mashrul Islam"
              className="photo-img"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
