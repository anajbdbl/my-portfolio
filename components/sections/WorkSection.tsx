import styles from './WorkSection.module.css';
import Link from 'next/link';

export default function WorkSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>WORK EXPERIENCE</h2>
        <div className={styles.layout}>
          <div className={styles.column}>
            <div className={styles.job}>
              <h3>Software Engineer Intern</h3>
              <p>May 2024 — August 2024</p>
            </div>
            <div className={styles.job}>
              <h3>Course Assistant</h3>
              <p>January 2023 — May 2025</p>
            </div>
            <div className={styles.job}>
              <h3>Software Development Intern</h3>
              <p>May 2023 — August 2023</p>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.job}>
              <h3>GM Financial</h3>
              <p>Dallas, TX</p>
            </div>
            <div className={styles.job}>
              <h3>Boston University</h3>
              <p>Boston, MA</p>
            </div>
            <div className={styles.job}>
              <h3>Intelimotor</h3>
              <p>Monterrey, MX</p>
            </div>
          </div>
        </div>
      </div>
    <div className={styles.linkWrapper}>
        <Link href="/experience" className={styles.learnMore}>Learn more →</Link>
    </div>
    </section>
  );
}
