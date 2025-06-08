import ParallaxImage from '@/components/ParallaxImage';
import styles from './case-study.module.css';

export default function CaseStudy() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Project Case Study</h1>
      <ParallaxImage src="/portfolio-redesign.png" alt="Portfolio redesign" />
      <section className={styles.content}>
        <p>
          This page demonstrates a simple parallax effect using Framer Motion. As
          you scroll, the image moves at a different speed than the rest of the
          content.
        </p>
      </section>
    </main>
  );
}
