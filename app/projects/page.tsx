import styles from './Projects.module.css';
import ProjectGrid from '@/components/ProjectGrid';

const projects = [
  {
    title: 'Film Log',
    category: 'Django Web App',
    link: 'https://shielded-shelf-88711-54e46ae20d3c.herokuapp.com/film_log/',
    bgColor: '#0C1F1C', // deep forest green
    image: '/film-log-preview.png',
  },
  {
    title: 'URL Shortener',
    category: 'Next.js Project',
    link: 'https://mp-5-mocha.vercel.app/',
    bgColor: '#111111', // soft black
    image: '/url-preview.png',
  },
  {
    title: 'Portfolio Redesign',
    category: 'Personal Website',
    link: 'https://mp-3-zeta-three.vercel.app/',
    bgColor: '#002A24', // dark teal
    image: '/portfolio-redesign.png',
  },
  {
    title: 'MET Gallery',
    category: 'Frontend App',
    link: 'https://mp-2-fawn.vercel.app/',
    bgColor: '#162016', // charcoal green
    image: '/met-gallery-preview.png',
  },
  {
    title: 'Resume Page',
    category: 'HTML Project',
    link: 'https://mp-1-two-gamma.vercel.app/',
    bgColor: '#1A1A1A',
    image: '/resume-preview.png',
  },
  {
    title: 'Assignments Hub',
    category: 'Course Archive',
    link: 'https://anajbdbl.github.io/',
    bgColor: '#07150F',
    image: '/assignments-preview.png',
  },
];

export default function Projects() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Selected Projects</h1>
      <ProjectGrid projects={projects} />
    </main>
  );
}
