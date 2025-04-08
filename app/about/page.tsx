import styles from './About.module.css';
import Image from 'next/image';
import profilePic from '../../public/profile.jpg'

export default function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src={profilePic}
            alt="Ana Julia"
            className={styles.profileImage}
            width={250}
            height={250}
          />
        </div>

        <div className={styles.bio}>
          <p>
            I’m Ana Julia — a software engineer passionate about blending creativity, logic,
            and human-centered design. I’m currently studying Computer Science at BU
            with a minor in Business Management.
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

      <section className={styles.skillsSection}>
        <h2>Tech Stack</h2>
        <div className={styles.skillsGrid}>
          <span>Python</span>
          <span>Java</span>
          <span>C</span>
          <span>C++</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Django</span>
          <span>SQL</span>
          <span>Linux</span>
          <span>Power BI</span>
        </div>
      </section>

      <section className={styles.passionSection}>
        <h2>What I am Passionate About</h2>
        <ul>
          <li>🌱 Using tech to solve real-world problems</li>
          <li>🎨 Clean UI & intuitive UX</li>
          <li>👩‍🏫 Teaching, mentoring, and lifting others up</li>
          <li>🧠 Building things that merge creativity and logic</li>
          <li>🌍 Promoting diversity and inclusion in tech</li>
        </ul>
      </section>
    </main>
  );
}
