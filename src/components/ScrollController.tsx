import { motion, useScroll, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollControllerProps {
  children: ReactNode;
}

const ScrollController = ({ children }: ScrollControllerProps) => {
  const { scrollYProgress } = useScroll();
  
  // Transform values for the animation intro (first child)
  // Intro starts fading at 10% scroll and completely disappears by 40%
  const introOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4], [1, 0.9, 0]);
  const introScale = useTransform(scrollYProgress, [0, 0.1, 0.4], [1, 0.95, 0.8]);
  const introY = useTransform(scrollYProgress, [0, 0.1, 0.4], [0, -30, -80]);
  
  // Transform values for the hero section (second child)
  // Hero starts appearing at 30% scroll and is fully visible by 60%
  const heroOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const heroY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);

  const childrenArray = Array.isArray(children) ? children : [children];
  const animationIntro = childrenArray[0];
  const heroSection = childrenArray[1];

  return (
    <div style={{ position: 'relative', minHeight: '200vh' }}>
      {/* Animation Intro Layer - Fixed position */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          opacity: introOpacity,
          scale: introScale,
          y: introY,
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        {animationIntro}
      </motion.div>

      {/* Hero Content Layer - Absolute positioned below intro */}
      <motion.div
        style={{
          position: 'absolute',
          top: '100vh', // Position below the intro
          left: 0,
          width: '100%',
          minHeight: '100vh',
          opacity: heroOpacity,
          y: heroY,
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {heroSection}
      </motion.div>
    </div>
  );
};

export default ScrollController;
