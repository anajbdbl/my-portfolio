import styles from './AboutSection.module.css';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <h2 className={styles.heading}>ABOUT<br />ANA JULIA</h2>
        <p className={styles.text}>
          Function meets feeling. That’s the sweet spot I build for.
          I’m Ana Julia — a developer with a visual mind and a systems brain. 
          My portfolio explores the tension between structure and spontaneity, always chasing balance between clarity and curiosity.
        </p>
      </div>
      <div className={styles.linkWrapper}>
        <Link href="/about" className={styles.learnMore}>Learn more →</Link>
      </div>
    </section>
  );
}
