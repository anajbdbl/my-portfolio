/* eslint-disable react/jsx-no-undef */
'use client';

import styles from './Navbar.module.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo} onClick={closeMenu}>
        <Image src="/logo.svg" alt="Ana Julia Logo" width={50} height={50} />
      </Link>

      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.mobileOpen : ''}`}>
        <li>
          <ScrollLink
            to="work"
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMenu}
          >
            Work
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMenu}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMenu}
          >
            Contact
          </ScrollLink>
        </li>
        <li className={pathname === '/projects' ? styles.active : ''}>
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
