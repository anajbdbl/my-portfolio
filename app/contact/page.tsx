import styles from './Contact.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import humanPic from '../../public/human.png';

export default function Contact() {
  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.info}>
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
        </div>

        <div className={styles.image}>
          <Image src={humanPic} alt="Human" width={300} height={300} />
        </div>
      </div>
    </main>
  );
}