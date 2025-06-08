import styles from './ContactSection.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <h2 className={styles.heading}>LET’S<br />CONNECT</h2>

        <div className={styles.info}>
          <p className={styles.email}>
            <a href="mailto:anajulia.br@gmail.com">anajulia.br@gmail.com</a>
          </p>

          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/anajuliabortolossi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/anajbdbl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.linkWrapper}>
        <Link href="/contact" className={styles.learnMore}>Reach out →</Link>
    </div>
    </section>
  );
}
