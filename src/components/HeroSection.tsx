import { motion } from 'framer-motion'
import { CardSpotlight } from './ui/card-spotlight'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Main Content */}
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            <span className="holographic-text">Build Conversations</span>
            <br />
            <span className="neon-text">That Convert</span>
          </h1>
          
          <p className="hero-subtitle">
            Create intelligent chatbots that understand, engage, and convert 
            your audience across every platform. No coding required.
          </p>
        </motion.div>

        <motion.div 
          className="hero-actions"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="cta-primary">
            Start Building Free
          </button>
          <button className="cta-secondary">
            Watch Demo
          </button>
        </motion.div>

        <motion.div 
          className="hero-features"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CardSpotlight 
            className="feature-card-spotlight"
            color="rgba(151, 254, 252, 0.4)"
            radius={300}
          >
            <div className="feature-card-content">
              <div className="feature-icon">🧠</div>
              <div className="feature-text">
                <h3 className="feature-title">AI-Powered Intelligence</h3>
                <p className="feature-description">
                  Advanced machine learning algorithms that understand context, 
                  learn from conversations, and provide human-like responses 
                  across multiple languages and platforms.
                </p>
              </div>
            </div>
          </CardSpotlight>

          <CardSpotlight 
            className="feature-card-spotlight"
            color="rgba(217, 138, 244, 0.4)"
            radius={300}
          >
            <div className="feature-card-content">
              <div className="feature-icon">⚡</div>
              <div className="feature-text">
                <h3 className="feature-title">No-Code Builder</h3>
                <p className="feature-description">
                  Drag-and-drop interface that makes chatbot creation effortless. 
                  Build complex conversation flows, integrate with your existing 
                  tools, and deploy in minutes without writing a single line of code.
                </p>
              </div>
            </div>
          </CardSpotlight>

          <CardSpotlight 
            className="feature-card-spotlight"
            color="rgba(57, 255, 20, 0.4)"
            radius={300}
          >
            <div className="feature-card-content">
              <div className="feature-icon">📊</div>
              <div className="feature-text">
                <h3 className="feature-title">Advanced Analytics</h3>
                <p className="feature-description">
                  Comprehensive insights into user engagement, conversion rates, 
                  and conversation patterns. Track performance, optimize responses, 
                  and maximize ROI with data-driven decisions.
                </p>
              </div>
            </div>
          </CardSpotlight>
        </motion.div>
      </div>

      {/* 3D Elements */}
      <div className="hero-3d-elements">
      </div>
    </section>
  )
}

export default HeroSection
