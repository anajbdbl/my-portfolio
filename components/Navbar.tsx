'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" onClick={closeMenu}>Ana Julia</Link>
      </div>

      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.mobileOpen : ''}`}>
        <li className={pathname === '/' ? styles.active : ''}>
          <Link href="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className={pathname === '/about' ? styles.active : ''}>
          <Link href="/about" onClick={closeMenu}>About</Link>
        </li>
        <li className={pathname === '/experience' ? styles.active : ''}>
          <Link href="/experience" onClick={closeMenu}>Experience</Link>
        </li>
        <li className={pathname === '/projects' ? styles.active : ''}>
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
        </li>
        <li className={pathname === '/contact' ? styles.active : ''}>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
