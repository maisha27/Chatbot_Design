import { motion } from 'framer-motion';

const ChatbotTrail = () => {
  // Create multiple trail particles
  const trailParticles = Array.from({ length: 8 }, (_, i) => i);

  const circularPath = {
    x: [
      -350, -250, -100, 100, 250, 300, 250, 100, -100, -250, -350
    ],
    y: [
      0, -80, -120, -120, -80, 0, 80, 120, 120, 80, 0
    ]
  };

  return (
    <>
      {trailParticles.map((index) => (
        <motion.div
          key={index}
          initial={{ x: -400, y: 0, opacity: 0, scale: 0.3 }}
          animate={{ 
            x: circularPath.x,
            y: circularPath.y,
            opacity: [0, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0],
            scale: [0.3, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.3],
          }}
          transition={{ 
            duration: 12,
            delay: 3 + (index * 0.2), // Staggered delay for trail effect
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20px',
            height: '20px',
            background: `radial-gradient(circle, rgba(151, 254, 252, ${0.8 - index * 0.1}) 0%, transparent 70%)`,
            borderRadius: '50%',
            zIndex: 10 + index,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
};

export default ChatbotTrail;
