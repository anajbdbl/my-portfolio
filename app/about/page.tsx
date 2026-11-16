import styles from './About.module.css';
import Image from 'next/image';
import profilePic from '../../public/profile.jpg';

export default function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>About Ana Julia</h1>
      <p className={styles.tagline}>
        Blending creativity, logic, and human-centered design.
      </p>

      <div className={styles.grid}>
        <div className={styles.image}>
          <Image
            src={profilePic}
            alt="Ana Julia"
            width={260}
            height={260}
            className={styles.profileImage}
          />
        </div>

        <div className={styles.bio}>
          <p>
          I am Ana Julia, a software engineer with a degree in 
          Computer Science from Boston University and a minor in Business Management and Administration.
          </p>
          <p>
          My experience spans software development, enterprise systems, and customer-facing technology. I have worked on everything from 
          building applications and data visualizations to maintaining production systems and developing digital customer communications.
          </p>
          <p>
          I am naturally curious and enjoy taking on unfamiliar challenges, learning how things work, and finding practical ways to bring ideas to life. 
          I am particularly interested in the intersection of technology, design, and business.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <ul className={styles.skills}>
          {[
            'Python', 'Java', 'C', 'C++', 'HTML', 'CSS', 'JavaScript', 'TypeScript',
            'React', 'Next.js', 'Django', 'SQL', 'Linux', 'Power BI'
          ].map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What I am Passionate About</h2>
        <ul className={styles.passions}>
          <li>Using tech to solve real-world problems</li>
          <li>Clean UI & intuitive UX</li>
          <li>Teaching, mentoring, and lifting others up</li>
          <li>Building things that merge creativity and logic</li>
          <li>Promoting diversity and inclusion in tech</li>
        </ul>
      </section>
    </main>
  );
}
