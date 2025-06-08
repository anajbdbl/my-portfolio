'use client';

import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.logoWrapper}>
        <Image
          src="/logo.svg"
          alt="Ana Julia Bortolossi Logo"
          width={250}
          height={250}
          priority
        />
      </div>

      <h1 className={styles.name}>ANA JULIA BORTOLOSSI</h1>
      <p className={styles.tagline}>I build user-friendly interfaces.</p>

      <Link href="/projects" className={styles.button}>
        View My Projects
      </Link>

      <div className={styles.scrollCue}>⌄</div>
    </section>
  );
}
