import styles from "./Projects.module.css";

const projects = [
  { name: "Project One", desc: "Short description of your project.", repo: "#", demo: "#" },
  { name: "Project Two", desc: "Another project summary.", repo: "#", demo: "#" },
];

export default function Projects() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.h2}>Projects</h2>
      <div className={styles.grid}>
        {projects.map(p => (
          <article key={p.name} className={styles.card}>
            <h3 className={styles.title}>{p.name}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.links}>
              <a className={styles.a} href={p.repo} target="_blank">GitHub</a>
              <a className={styles.a} href={p.demo} target="_blank">Live</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
