'use client';

import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FloatingIcon from './FloatingIcon';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <FloatingIcon src="/human2.png" alt="Human Outline" top="45%" left="85%" range={['10%', '-25%']} size={100} />
      <FloatingIcon src="/orbit2.png" alt="Orbit" top="20%" left="10%" range={['0%', '-15%']} size={100} />

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
        Structured code. Unstructured imagination.
      </motion.p>

      <Link href="/projects" className={styles.button}>
        View My Projects
      </Link>

      <div className={styles.scrollCue}>⌄</div>
    </section>
  );
}
