import styles from './AboutSection.module.css';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <h2 className={styles.heading}>ABOUT<br />ANA JULIA</h2>
        <p className={styles.text}>
        I am Ana Julia. I like figuring things out, making things work, and finding better ways to build them. 
        Somewhere between technology, design, and a lot of curiosity is where I feel most at home.
        </p>
      </div>
      <div className={styles.linkWrapper}>
        <Link href="/about" className={styles.learnMore}>Learn more →</Link>
      </div>
    </section>
  );
}
