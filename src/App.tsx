import './App.css'
import HeroSection from './components/HeroSection'
import ParticleBackground from './components/ParticleBackground'
import AnimationIntro from './components/AnimationIntro'
import ScrollController from './components/ScrollController'

function App() {
  return (
    <div className="app">
      {/* Interactive Particle Background */}
      <ParticleBackground />
      
      {/* Scroll-Controlled Layout with Animation Intro and Hero Section */}
      <ScrollController>
        <AnimationIntro />
        <HeroSection />
      </ScrollController>
    </div>
  )
}

export default App
