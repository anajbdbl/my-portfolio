import ParallaxImage from '@/components/ParallaxImage';
import styles from './case-study.module.css';
import FloatingIcon from '@/components/FloatingIcon';


export default function CaseStudy() {
  return (
    <main className={styles.container}>
      <FloatingIcon src="/orbit.png" alt="Floating star" top="65%" left="85%" range={['10%', '-25%']} size={100} />
      <FloatingIcon src="/star.png" alt="Doodle" top="40%" left="10%" range={['0%', '-15%']} size={100} />


      {/* Title Section */}
      <header className={styles.header}>
        <h1 className={styles.heading}>Parallax in Practice</h1>
        <p className={styles.subheading}>Front-End Animation • Portfolio • 2025</p>
      </header>

      {/* Visual Demo */}
      <ParallaxImage src="/parallax.png" alt="Parallax visual element" />

      {/* Concept */}
      <section className={styles.section}>
        <h2>Why Parallax?</h2>
        <p>
          Parallax effects introduce depth and layering into modern web interfaces. I used it to bring
          a sense of movement and play to my personal site — while maintaining clarity and structure.
        </p>
      </section>

      {/* Implementation */}
      <section className={styles.section}>
        <h2>How I Built It</h2>
        <ul>
          <li>Built with <strong>Next.js</strong> and custom React components</li>
          <li>Used <strong>Framer Motion</strong> for scroll-based animations</li>
          <li>Layered <strong>SVG doodles</strong> and icons at different z-depths</li>
          <li>Created reusable <code>&lt;ParallaxImage&gt;</code> component with props for speed & offset</li>
        </ul>
      </section>

      {/* Design Thinking */}
      <section className={styles.section}>
        <h2>Interaction Goals</h2>
        <p>
          Parallax wasn’t just aesthetic — I used it to guide attention between sections, soften scroll
          transitions, and reinforce my visual branding with motion.
        </p>
        <p>
          I tested contrast, reduced distraction by limiting parallax depth on text, and reserved motion for decorative/secondary elements.
        </p>
      </section>

      {/* Outcomes */}
      <section className={styles.section}>
        <h2>What I Learned</h2>
        <ul>
          <li>Motion can clarify — not just decorate — when used intentionally</li>
          <li>Performance is key: always throttle and optimize scroll effects</li>
          <li>Users remembered the experience — parallax boosted perceived polish</li>
        </ul>
      </section>

      {/* CTA */}
      <footer className={styles.footer}>
        <a href="/projects" className={styles.cta}>← Back to Projects</a>
      </footer>
    </main>
  );
}
