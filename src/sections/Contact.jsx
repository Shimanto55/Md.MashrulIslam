import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-wrap">
        {/* LEFT SIDE: info & links */}
        <div className="contact-left">
          <h2 className="h2">Get in Touch</h2>

          <div className="contact-badge-row">
            <span className="contact-badge">Available for remote work & collaboration</span>
            <span className="contact-response">Usually replies within 24 hours</span>
          </div>

          <p className="contact-intro">
            Have a project, collaboration, or just want to say hello? I’m open to
            meaningful work where I can help with React, MERN, or security-minded
            web development.
          </p>

          <ul className="contact-info">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:mdmashrulislam.cse@gmail.com">
                mdmashrulislam.cse@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+8801752024804">+880&nbsp;1752&nbsp;024&nbsp;804</a>
            </li>
            <li>
              <strong>Location:</strong> Dhaka, Bangladesh (open to remote)
            </li>
          </ul>

          <div className="socials">
            <a
              href="https://www.linkedin.com/in/md-mashrul-islam-742702251?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="social-pill linkedin"
            >
              <span>🔗</span> LinkedIn
            </a>
            <a
              href="https://github.com/shimanto55"
              target="_blank"
              rel="noreferrer"
              className="social-pill github"
            >
              <span>💻</span> GitHub
            </a>
            <a
              href="https://www.facebook.com/share/1BGJ9CPJSb/"
              target="_blank"
              rel="noreferrer"
              className="social-pill facebook"
            >
              <span>👥</span> Facebook
            </a>
          </div>

          <a href="/resume.pdf" download className="btn btn-primary resume-btn">
            ⬇ Download Resume
          </a>
        </div>

        {/* RIGHT SIDE: form */}
        <form
          className="contact-form"
          action="https://formspree.io/f/xeorzpvr"
          method="POST"
          encType="multipart/form-data"
        >
          <h3 className="contact-form-title">Tell me a bit about your project</h3>
          <p className="contact-form-sub">
            A short description is enough. I’ll follow up with specific questions if needed.
          </p>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="_replyto"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">How can I help?</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share a short overview of your idea, project, or question."
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="file">
              Attachment <span className="optional">(optional)</span>
            </label>
            <input id="file" name="file" type="file" />
            <p className="field-hint">You can attach a brief, design, or screenshot if you like.</p>
          </div>

          {/* Simple honeypot for bots (Formspree will just ignore this field) */}
          <input
            type="text"
            name="_gotcha"
            className="honeypot"
            tabIndex="-1"
            autoComplete="off"
          />

          <button type="submit" className="btn btn-primary contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
