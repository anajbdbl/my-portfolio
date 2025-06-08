import styles from './Contact.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Let’s connect</h1>

      <p className={styles.email}>
        <a href="mailto:anajulia.br@gmail.com">anajulia.br@gmail.com</a>
      </p>

      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/anajuliabortolossi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/anajbdbl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
      </div>
    </main>
  );
}
