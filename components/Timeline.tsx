import styles from './Timeline.module.css';
import AnimatedReveal from '@/components/AnimatedReveal';

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
      <div className={styles.timeline}>
        {items.map((exp, index) => (
          <AnimatedReveal key={index} delay={index * 0.1}>
            <div className={styles.item}>
              <div className={styles.circle} />
              <div className={styles.content}>
                <h3 className={styles.title}>{exp.title}</h3>
                <p className={styles.company}>
                  {exp.company} — {exp.location}
                </p>
                <p className={styles.date}>{exp.date}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </div>
  );
}
