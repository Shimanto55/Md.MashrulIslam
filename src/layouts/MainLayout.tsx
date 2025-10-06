import type { ReactNode } from "react";
import Navbar from "../components/Navbar";

import styles from "./MainLayout.module.css";

type MainLayoutProps = { children: ReactNode };

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.shell}>
      <Navbar />

      <header className={styles.header}>
        <h1 className={styles.title}>Md. Mashrul Islam</h1>
        <p className={styles.subtitle}>
          Web Developer | Cybersecurity Enthusiast
        </p>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Md. Mashrul Islam. All rights reserved.
      </footer>
    </div>
  );
}
