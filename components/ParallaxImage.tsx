'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  height?: number;
}

export default function ParallaxImage({ src, alt, height = 500 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <div ref={ref} style={{ position: 'relative', height, overflow: 'hidden' }}>
      <motion.div style={{ y, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
      </motion.div>
    </div>
  );
}
