'use client';

import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.logoWrapper}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <Image
          src="/logo.svg"
          alt="Ana Julia Bortolossi Logo"
          width={250}
          height={250}
          priority
        />
      </motion.div>

      <motion.h1
        className={styles.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ANA JULIA BORTOLOSSI
      </motion.h1>
      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I build user-friendly interfaces.
      </motion.p>

      <Link href="/projects" className={styles.button}>
        View My Projects
      </Link>

      <div className={styles.scrollCue}>⌄</div>
    </section>
  );
}
