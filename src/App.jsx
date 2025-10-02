import React, { Suspense } from 'react'
import MainScene from './components/scene/MainScene.jsx'
import Loader from './components/ui/Loader.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import ProjectsSection from './components/sections/ProjectsSection.jsx'
import ContactSection from './components/sections/ContactSection.jsx'
import './styles/globals.css'

function App() {
  return (
    <div className="app">
      <div className="canvas-container">
        <Suspense fallback={<Loader />}>
          <MainScene />
        </Suspense>
      </div>

      <div className="content-overlay">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <style jsx global>{`
        .app {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: #0a0a0a;
        }
        .canvas-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .content-overlay {
          position: relative;
          z-index: 1;
          pointer-events: none;
        }
        .content-overlay > * {
          pointer-events: auto;
        }
      `}</style>
    </div>
  )
}

export default App
