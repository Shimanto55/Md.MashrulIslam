import styles from "./Skills.module.css";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Vite", "Tailwind CSS",
  "Node.js (basic)", "MongoDB (basic)", "Git & GitHub"
];

export default function Skills() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.h2}>Skills</h2>
      <div className={styles.list}>
        {skills.map(s => <span key={s} className={styles.badge}>{s}</span>)}
      </div>
    </section>
  );
}
