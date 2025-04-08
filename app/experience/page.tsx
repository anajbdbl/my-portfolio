'use client';

import styles from './Experience.module.css';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Development Engineer Intern',
    company: 'General Motors Financial',
    location: 'Fort Worth, TX',
    date: 'May 2024 – Aug 2024',
    description:
      'Conducted rebate analysis and financial reconciliation, managed Access databases, created Power BI dashboards, and presented reports to vendors.',
  },
  {
    title: 'Software Development Intern',
    company: 'Intelimotor',
    location: 'Remote, MX',
    date: 'May 2023 – Aug 2023',
    description:
      'Built scalable cloud-based apps using React, TypeScript, and JavaScript. Improved UI/UX with data visualization and integrated third-party APIs.',
  },
  {
    title: 'Course Assistant - CS 210',
    company: 'Boston University Computer Science',
    location: 'Boston, MA',
    date: 'Jan 2023 – Present',
    description:
      'Facilitated labs, held office hours, and graded assignments for over 400 students on topics in Python, UNIX, C, and circuits/state machines.',
  }
];

export default function Experience() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>My Experience</h1>
      <a
        href="/Ana Julia Bortolossi Resume.docx.pdf"
        download
        className={styles.resumeButtonTop}
      >
        Download My Resume
      </a>

      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <motion.div
            className={`${styles.item} ${idx % 2 === 0 ? styles.left : styles.right}`}
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className={styles.content}>
              <h2 className={styles.title}><strong>{exp.title}</strong></h2>
              <p className={styles.company}>{exp.company} — {exp.location}</p>
              <p className={styles.date}>{exp.date}</p>
              <p className={styles.description}>{exp.description}</p>
            </div>
            <span className={styles.circle}></span>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
