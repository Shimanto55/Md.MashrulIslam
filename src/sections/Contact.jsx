import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-wrap">
        <div className="contact-left">
          <h2 className="h2">Get in Touch</h2>
          <p className="contact-intro">
            Have a project, collaboration, or just want to say hello?
            I’m always open to meaningful work and conversations.
          </p>

          <ul className="contact-info">
            <li><strong>Email:</strong> <a href="mailto:mdmashrulislam.cse@gmail.com">mdmashrulislam.cse@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+8801XXXXXXXXX">+880 1X XXX XXXX</a></li>
            <li><strong>Location:</strong> Dhaka, Bangladesh</li>
          </ul>

          <div className="socials">
            <a href="https://www.linkedin.com/in/mdmashrulislam" target="_blank">LinkedIn</a>
            <a href="https://github.com/shimanto55" target="_blank">GitHub</a>
            <a href="#" target="_blank">Facebook</a>
          </div>

          <a href="/resume.pdf" download className="btn btn-primary resume-btn">
            ⬇ Download Resume
          </a>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/xeorzpvr"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="_replyto" type="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <div className="form-field">
            <label htmlFor="file">Attachment (optional)</label>
            <input id="file" name="file" type="file" />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
