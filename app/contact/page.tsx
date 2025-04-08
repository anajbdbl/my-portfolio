import styles from './Contact.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Contact Me</h1>
      <p className={styles.description}>
        Want to connect, collaborate, or just say hi? Feel free to reach out!
      </p>

      <div className={styles.info}>
        <p><strong>Email:</strong> <a href="mailto:anajbdbl@bu.edu">anajbdbl@bu.edu</a></p>

        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/anajuliabortolossi/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin size={28} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/anajbdbl"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaGithub size={28} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </main>
  );
}
