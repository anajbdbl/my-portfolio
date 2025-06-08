import Timeline from '@/components/Timeline';
import styles from './Experience.module.css';

const experiences = [
  {
    title: 'Software Development Engineer Intern',
    company: 'General Motors Financial',
    location: 'Fort Worth, TX',
    date: 'May 2024 – Aug 2024',
    description:
      'Led monthly rebate analysis and reporting using Power BI. Managed Access databases and communicated findings to external vendors.',
  },
  {
    title: 'Software Development Intern',
    company: 'Intelimotor',
    location: 'Remote, MX',
    date: 'May 2023 – Aug 2023',
    description:
      'Built cloud-based React apps and integrated third-party APIs to enhance functionality and UI responsiveness.',
  },
  {
    title: 'Course Assistant – CS 210',
    company: 'Boston University',
    location: 'Boston, MA',
    date: 'Jan 2023 – Present',
    description:
      'Taught Python, C, UNIX, and logic systems in lab and office hour environments, supporting over 400 students.',
  },
];

export default function ExperiencePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Work Experience</h1>
      <Timeline items={experiences} />
    </main>
  );
}
