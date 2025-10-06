import styles from "./Labs.module.css";

export default function Labs() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.h2}>Cyber Labs & Write-ups</h2>
      <p className={styles.p}>
        I’ll publish beginner-friendly security notes here (e.g., OWASP Top 10,
        basic recon, auth hardening). TryHackMe/HackTheBox profiles can be added later.
      </p>
    </section>
  );
}
