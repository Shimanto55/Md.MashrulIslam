import styles from "./Contact.module.css";

// Formspree action placeholder — we’ll wire it later.
const FORMSPREE_ACTION = "https://formspree.io/f/your_form_id";

export default function Contact() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.h2}>Contact Me</h2>
      <form action={FORMSPREE_ACTION} method="POST">
        <div className="space-y-4">
          <input className={styles.input} name="name" placeholder="Your Name" required />
          <input className={styles.input} name="email" type="email" placeholder="Your Email" required />
          <textarea className={styles.textarea} name="message" placeholder="Your Message" required />
        </div>
        <button className={styles.btn} type="submit">Send</button>
      </form>
    </section>
  );
}
