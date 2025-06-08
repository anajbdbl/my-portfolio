'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface FloatingIconProps {
  src: string;
  alt: string;
  top: string;
  left: string;
  range?: [string, string];
  size?: number;
}

export default function FloatingIcon({
  src,
  alt,
  top,
  left,
  range = ['0%', '-20%'],
  size = 80,
}: FloatingIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], range);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top,
        left,
        width: size,
        height: size,
        zIndex: 5,
        pointerEvents: 'none',
      }}
    >
      <motion.div style={{ y }}>
        <Image src={src} alt={alt} width={size} height={size} />
      </motion.div>
    </div>
  );
}
