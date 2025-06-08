import styles from './Timeline.module.css';
import AnimatedReveal from '@/components/AnimatedReveal';
import { motion } from 'framer-motion';

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
            <motion.div
              className={styles.item}
              whileHover={{ backgroundColor: '#f0f0f0' }}
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.circle} />
              <div className={styles.content}>
                <h3 className={styles.title}>{exp.title}</h3>
                <p className={styles.company}>
                  {exp.company} — {exp.location}
                </p>
                <p className={styles.date}>{exp.date}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </motion.div>
          </AnimatedReveal>
        ))}
      </div>
    </div>
  );
}
