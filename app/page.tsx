import styles from './Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Ana Julia Bortolossi</h1>
      <h2 className={styles.subtitle}>Software Engineer • Creative Developer</h2>
      <p className={styles.description}>
        Welcome to my portfolio! I am passionate about building clean, modern web experiences.
        Explore my projects, background, and get in touch.
      </p>
      <Link href="/projects" className={styles.button}>
        See My Work
      </Link>
    </main>
  );
}