import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import useTypewriter from '../hooks/useTypewriter';

const LottieChatbot = () => {
  const { displayText } = useTypewriter("Hello! I'm your AI assistant 🤖", 80, 4500);

  return (
    <motion.div
      initial={{ x: -400, y: 0, opacity: 0, scale: 0.6 }}
      animate={{ 
        x: [-400, -200, 0, 50, 100, 150, 200],
        y: [0, 0, 0, 0, 0, 0, 0],
        opacity: [0, 0.5, 1, 1, 1, 1, 1],
        scale: [0.6, 0.8, 1, 1, 1, 1, 1],
      }}
      transition={{ 
        x: { duration: 3, delay: 2, ease: "easeOut" },
        y: { duration: 0.1 },
        opacity: { duration: 2, delay: 2 },
        scale: { duration: 2, delay: 2 },
      }}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '280px',
        height: '280px',
        zIndex: 20,
        filter: 'drop-shadow(0 0 25px rgba(151, 254, 252, 0.6))',
        pointerEvents: 'none',
      }}
      whileHover={{
        scale: 1.05,
        filter: 'drop-shadow(0 0 30px rgba(151, 254, 252, 0.8))',
        transition: { duration: 0.3 }
      }}
    >
      {/* Enhanced Animated Background Circle */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(151, 254, 252, 0.3) 0%, rgba(217, 138, 244, 0.2) 50%, transparent 70%)',
          borderRadius: '50%',
          zIndex: -1,
        }}
      />

      {/* Pulsing Ring Effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 2, 4],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 2,
          delay: 5,
          repeat: 2,
          ease: "easeOut"
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '280px',
          height: '280px',
          border: '3px solid rgba(151, 254, 252, 0.8)',
          borderRadius: '50%',
          zIndex: -2,
        }}
      />
      
      {/* Lottie Animation */}
      <DotLottieReact
        src="https://lottie.host/817e03ec-3664-4c54-8f58-159ce831763f/meZUBjguJV.lottie"
        loop
        autoplay
        style={{ 
          width: '100%', 
          height: '100%',
          filter: 'brightness(1.2) contrast(1.1)'
        }}
        speed={1.5}
      />
      
      {/* Static Speech Bubble - No more circling */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ 
          opacity: 1,
          scale: 1,
          y: [-20, -15, -20]
        }}
        transition={{ 
          opacity: { duration: 1, delay: 4 },
          scale: { duration: 1, delay: 4 },
          y: { 
            duration: 3, 
            delay: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
        style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: '20px',
          background: 'rgba(151, 254, 252, 0.15)',
          border: '2px solid rgba(151, 254, 252, 0.4)',
          borderRadius: '25px',
          padding: '12px 20px',
          fontSize: '14px',
          fontFamily: 'var(--font-accent)',
          color: 'var(--accent-cyan)',
          backdropFilter: 'blur(15px)',
          boxShadow: '0 0 20px rgba(151, 254, 252, 0.3)',
          whiteSpace: 'nowrap',
          zIndex: 5,
          minWidth: '200px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          {displayText}
        </div>
        {/* Speech bubble tail - pointing down to the chatbot */}
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid rgba(151, 254, 252, 0.3)',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LottieChatbot;