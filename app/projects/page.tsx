import styles from './Projects.module.css';

const projects = [
    {
      title: 'Film Log',
      description: 'Django web app inspired by Letterboxd. Users can log, review, and rate films.',
      tech: ['Django', 'Python', 'Bootstrap'],
      link: 'https://shielded-shelf-88711-54e46ae20d3c.herokuapp.com/film_log/',
    },
    {
      title: 'Art Explorer',
      description: 'Rebuilt my MP2 assignment using a different API and Next.js + TypeScript.',
      tech: ['Next.js', 'TypeScript', 'API'],
      link: 'https://shielded-shelf-88711-54e46ae20d3c.herokuapp.com/film_log/',
  },
    {
      title: 'Portfolio Redesign',
      description: 'Rebuilt my MP1 assignment using React + TypeScript, adding reusable components and improving code structure.',
      tech: ['React', 'TypeScript', 'Vite'],
      link: 'https://mp-3-zeta-three.vercel.app/',
    },
    {
      title: 'MET Artwork Gallery',
      description: 'Dynamic gallery app using React with routing and async APIs for real-time artwork displays at the MET.',
      tech: ['React', 'JavaScript', 'METGallery API'],
      link: 'https://mp-2-fawn.vercel.app/',
    },
    {
      title: 'Basic Resume Page',
      description: 'Static personal resume and calculator project using HTML, CSS, and JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://mp-1-two-gamma.vercel.app/',
    },
    {
      title: 'Assignments Collection',
      description: 'A collection of course assignments including game dev, data analysis, and UI/UX experiments.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://anajbdbl.github.io/',
    },
  ];
  

export default function Projects() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.techList}>
              {project.tech.map((t, i) => (
                <li key={i} className={styles.tech}>{t}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              View Project →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
