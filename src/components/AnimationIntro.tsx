import { motion } from 'framer-motion';
import { useState } from 'react';
import LottieChatbot from './LottieChatbot';
import ChatbotTrail from './ChatbotTrail';

const AnimationIntro = () => {
  const [isVisible] = useState(true);

  return (
    <motion.div 
      className="animation-intro"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'auto'
      }}
    >
      {/* Animated Chat Interface Placeholder */}
      <motion.div
        className="chat-interface"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          width: '600px',
          height: '400px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '25px',
          border: '3px solid #97fefc',
          padding: '30px',
          backdropFilter: 'blur(15px)',
          position: 'relative',
          marginBottom: '3rem',
          boxShadow: '0 20px 60px rgba(151, 254, 252, 0.2)',
        }}
      >
        {/* Chat Messages Animation - Enhanced Size */}
        <motion.div
          style={{
            marginBottom: '15px',
            padding: '15px 20px',
            background: '#97fefc',
            color: '#151039',
            borderRadius: '20px 20px 20px 8px',
            maxWidth: '85%',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(151, 254, 252, 0.3)'
          }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Hey! How can I help you today?
        </motion.div>

        <motion.div
          style={{
            marginBottom: '15px',
            padding: '15px 20px',
            background: '#d98af4',
            color: '#151039',
            borderRadius: '20px 20px 8px 20px',
            maxWidth: '85%',
            marginLeft: 'auto',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(217, 138, 244, 0.3)'
          }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          I need help with my business automation
        </motion.div>

        <motion.div
          style={{
            marginBottom: '15px',
            padding: '15px 20px',
            background: '#97fefc',
            color: '#151039',
            borderRadius: '20px 20px 20px 8px',
            maxWidth: '90%',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(151, 254, 252, 0.3)'
          }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          Perfect! I can create a custom chatbot that handles customer inquiries, lead generation, and more. Let's get started!
        </motion.div>

        {/* Typing indicator */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '10px 15px',
            background: 'rgba(151, 254, 252, 0.2)',
            borderRadius: '15px',
            maxWidth: '60px',
            marginTop: '10px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.5 }}
        >
          <motion.div
            style={{
              width: '4px',
              height: '4px',
              background: '#97fefc',
              borderRadius: '50%'
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            style={{
              width: '4px',
              height: '4px',
              background: '#97fefc',
              borderRadius: '50%'
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            style={{
              width: '4px',
              height: '4px',
              background: '#97fefc',
              borderRadius: '50%'
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          />
        </motion.div>
      </motion.div>

      {/* Chatbot Trail Effect */}
      <ChatbotTrail />

      {/* Lottie Chatbot Animation */}
      <LottieChatbot />

      {/* Continue Text */}
      <motion.p
        style={{
          color: '#97fefc',
          fontSize: '16px',
          marginTop: '2rem',
          textAlign: 'center',
          fontWeight: '300'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3 }}
      >
        Scroll down to explore the platform
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          marginTop: '1rem',
          color: '#97fefc',
          fontSize: '24px'
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 3.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        ↓
      </motion.div>
    </motion.div>
  );
};

export default AnimationIntro;
