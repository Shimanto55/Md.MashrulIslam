import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.h2}>Blog</h2>
      <p className={styles.note}>Coming soon: posts on MERN & security fundamentals.</p>
    </section>
  );
}
