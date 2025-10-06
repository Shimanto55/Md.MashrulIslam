import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-wrap">
        <div className="about-text">
          <h2 className="h2">About Me</h2>
          <p className="about-p">
            I’m <strong>Md. Mashrul Islam</strong> — a web developer who enjoys
            turning ideas into clean, accessible, and responsive interfaces.
            My current stack is <strong>React</strong> with <strong>JavaScript</strong> and the MERN ecosystem.
          </p>
          <p className="about-p">
            I care about performance, sensible design, and security basics:
            authentication, validation, and safe data handling. I’m actively
            learning cybersecurity fundamentals to build software that’s not just
            fast, but also safer to use.
          </p>

          <div className="about-pills">
            <span className="pill">React</span>
            <span className="pill">JavaScript</span>
            <span className="pill">MERN (basic)</span>
            <span className="pill">Git & GitHub</span>
            <span className="pill">Accessibility</span>
            <span className="pill">Security Basics</span>
          </div>

          <div className="about-cta">
            <a href="#projects" className="btn btn-primary">See Projects</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
        </div>

        <div className="about-photo">
          {/* Put your photo at /public/me.jpg for a real image */}
          <div className="photo" style={{backgroundImage:'url("/me.jpg")'}} />
          <small className="photo-note">Place your photo as <code>/public/me.jpg</code></small>
        </div>
      </div>
    </section>
  );
}
