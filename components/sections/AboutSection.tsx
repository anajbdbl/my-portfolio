import styles from './AboutSection.module.css';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <h2 className={styles.heading}>ABOUT<br />ANA JULIA</h2>
        <p className={styles.text}>
          I build user-friendly interfaces that blend form and function — rooted in empathy, guided by logic.
        </p>
      </div>
      <div className={styles.linkWrapper}>
        <Link href="/about" className={styles.learnMore}>Learn more →</Link>
      </div>
    </section>
  );
}
