import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  offset?: number;
  direction?: 'up' | 'down';
}

function ParallaxWrapper({
  children,
  offset = 50,
  direction = 'up',
}: ParallaxWrapperProps) {
  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [0, -offset] : [0, offset]
  );

  return (
    <motion.div style={{ y }} transition={{ type: 'spring', stiffness: 100 }}>
      {children}
    </motion.div>
  );
}

export default ParallaxWrapper;
