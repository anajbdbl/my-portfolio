import styles from './ProjectGrid.module.css';

type Project = {
  title: string;
  category: string;
  link: string;
  bgColor: string;
  textColor?: string;
  image?: string;
};

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section className={styles.grid}>
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.tile}
          style={{
            backgroundColor: project.bgColor,
            color: project.textColor || '#FFFFFF',
          }}
        >
          <div className={styles.content}>
            <span className={styles.label}>{project.category}</span>
            <h2 className={styles.title}>{project.title}</h2>
          </div>
          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className={styles.image}
            />
          )}
        </a>
      ))}
    </section>
  );
}
