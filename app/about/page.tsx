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
            I’m Ana Julia — a software engineer passionate about blending creativity, logic,
            and human-centered design. I recently graduated from BU with a degree in Computer Science
            and a minor in Business Management and administration.
          </p>
          <p>
            I love building things that are intuitive, meaningful, and user-focused — whether it’s
            designing a Django app like Film Log, guiding students as a Course Assistant, or exploring
            new ways to combine tech with business impact.
          </p>
          <p>
            I am especially passionate about accessibility, representation in tech, and crafting
            elegant interfaces that make a difference.
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
