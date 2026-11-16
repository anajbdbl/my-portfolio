/* eslint-disable react/jsx-no-undef */
'use client';

import styles from './Navbar.module.css';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: 'Work', section: 'work', href: '/experience' },
    { label: 'About', section: 'about', href: '/about' },
    { label: 'Contact', section: 'contact', href: '/contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${shrink ? styles.shrink : ''}`}>
      <Link href="/" className={styles.logo} onClick={closeMenu}>
        <Image
          src="/logo.svg"
          alt="Ana Julia Logo"
          width={50}
          height={50}
        />
      </Link>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navItems.map(item => (
          <li key={item.section}>
            {pathname === '/' ? (
              <ScrollLink
                to={item.section}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={closeMenu}
                style={{ cursor: 'pointer' }}
              >
                {item.label}
              </ScrollLink>
            ) : (
              <Link
                href={item.href}
                onClick={closeMenu}
                className={pathname === item.href ? styles.active : ''}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}

        <li className={pathname.startsWith('/projects') ? styles.active : ''}>
          <Link href="/projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
