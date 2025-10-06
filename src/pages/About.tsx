import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.h2}>About Me</h2>
      <p className={styles.p}>
        I’m Md. Mashrul Islam — a professional web developer (MERN, React, TypeScript)
        building clean, secure, and performant apps. I’m actively growing toward
        Cybersecurity, focusing on secure coding, auth, and basic offensive labs.
      </p>
    </section>
  );
}
