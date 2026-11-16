import styles from './About.module.css';
import Image from 'next/image';
import profilePic from '../../public/profile.jpg';

const skills = [
  {
    category: 'Languages',
    items: 'Python, Java, C, C++, JavaScript, TypeScript, SQL',
  },
  {
    category: 'Development',
    items: 'React, Next.js, Django, HTML, CSS',
  },
  {
    category: 'Tools & Platforms',
    items: 'Linux, Git, Power BI',
  },
];

export default function About() {
  return (
    <main className={styles.container}>

      {/* Introduction */}
      <header className={styles.intro}>
        <span className={styles.eyebrow}>A LITTLE ABOUT ME</span>
        <h1 className={styles.heading}>
          I like understanding how things work and finding ways to make
          them work better.
        </h1>
      </header>

      {/* Biography */}
      <section className={styles.bioGrid}>
        <div className={styles.image}>
          <Image
            src={profilePic}
            alt="Ana Julia"
            width={400}
            height={500}
            className={styles.profileImage}
          />
        </div>

        <div className={styles.bio}>
          <span className={styles.eyebrow}>MY BACKGROUND</span>

          <p>
            I am Ana Julia, a software engineer with a degree in Computer
            Science from Boston University and a minor in Business
            Management and Administration.
          </p>

          <p>
            My experience spans software development, enterprise systems,
            and customer-facing technology. I have worked on building
            applications, maintaining production systems, and developing
            digital experiences that connect technology with people.
          </p>

          <p>
            I am naturally curious and enjoy working through unfamiliar
            problems, learning new technologies, and turning ideas into
            practical solutions. I am particularly interested in the
            intersection of technology, design, and business.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>02 / TECHNICAL TOOLKIT</span>
          <h2>Tools I work with</h2>
        </div>

        <div className={styles.skills}>
          {skills.map((group) => (
            <div className={styles.skillRow} key={group.category}>
              <h3>{group.category}</h3>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personal approach */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>03 / BEYOND THE CODE</span>
          <h2>A few things that shape how I work</h2>
        </div>

        <div className={styles.approachGrid}>
          <article>
            <span>01</span>
            <h3>Curiosity</h3>
            <p>
              I enjoy exploring unfamiliar ideas, asking questions,
              and continuously learning.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Problem-solving</h3>
            <p>
              I like breaking complex problems into smaller pieces
              and finding thoughtful, practical solutions.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Perspective</h3>
            <p>
              My background in both technology and business
              influences how I think about the people and purpose
              behind what we build.
            </p>
          </article>
        </div>
      </section>

    </main>
  );
}
