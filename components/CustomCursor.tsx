'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const grow = () => cursor.classList.add('cursor-hover');
    const shrink = () => cursor.classList.remove('cursor-hover');

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseover', grow);
      el.addEventListener('mouseout', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseover', grow);
        el.removeEventListener('mouseout', shrink);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
