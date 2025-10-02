import React, { Suspense } from 'react'
import MainScene from './components/scene/MainScene.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import ProjectsSection from './components/sections/ProjectsSection.jsx'
import ContactSection from './components/sections/ContactSection.jsx'
import './styles/globals.css'

function App() {
  return (
    <div className="app">
      <div className="canvas-container">
        <MainScene />
      </div>

      <div className="content-overlay">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  )
}

export default App
