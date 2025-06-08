import Timeline from '@/components/Timeline';
import styles from './Experience.module.css';

const experiences = [
  {
    title: 'Software Development Engineer Intern',
    company: 'General Motors Financial',
    location: 'Fort Worth, TX',
    date: 'May 2024 – Aug 2024',
    description:
      "Performed monthly financial reconciliations and rebate analyses using Excel while managing Access databases to streamline reporting and invoice accuracy. Leveraged Power BI to generate actionable data reports and presented findings to external vendors, improving communication and transparency.",
  },
  {
    title: 'Software Development Intern',
    company: 'Intelimotor',
    location: 'Remote, MX',
    date: 'May 2023 – Aug 2023',
    description:
      'Built scalable, cloud-based applications using React, TypeScript, and JavaScript, focusing on performance, reliability, and maintainability. Designed intuitive user interfaces with data visualizations and integrated third-party APIs to enhance functionality, usability, and overall user satisfaction.',
  },
  {
    title: 'Course Assistant – CS 210',
    company: 'Boston University',
    location: 'Boston, MA',
    date: 'Jan 2023 – Present',
    description:
      'Led weekly lab sessions for 20 students on Python, UNIX, C, circuits, and state machines to reinforce lecture concepts and practical skills. Held office hours for personalized support and graded assignments for over 400 students, providing detailed feedback to promote understanding and academic growth.',
  },
];

export default function ExperiencePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Work Experience</h1>
      <Timeline items={experiences} />
      <div className={styles.downloadWrapper}>
        <a
          href="/Ana Julia Bortolossi Resume.pdf"
          download
          className={styles.downloadButton}
        >
          Download My Resume →
        </a>
      </div>
    </main>
  );
}
