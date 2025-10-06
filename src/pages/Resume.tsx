import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.h2}>Resume</h2>
      <p className={styles.p}>
        Download my resume:
        {" "}
        <a className={styles.link} href="/resume.pdf" target="_blank" rel="noreferrer">
          resume.pdf
        </a>
        {" "}
        (replace with your actual file).
      </p>
    </section>
  );
}
