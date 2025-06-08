import styles from './Timeline.module.css';

type Experience = {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
};

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line} />
      <div className={styles.timeline}>
        {items.map((exp, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.circle} />
            <div className={styles.content}>
              <h3 className={styles.title}>{exp.title}</h3>
              <p className={styles.company}>{exp.company}</p>
              <p className={styles.date}>{exp.date}</p>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
