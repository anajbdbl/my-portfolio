import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Ana Julia Bortolossi De Barros Lopes. All rights reserved.</p>
    </footer>
  );
}
