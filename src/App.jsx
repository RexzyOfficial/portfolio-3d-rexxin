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
      {/* 3D Background Canvas */}
      <div className="canvas-container">
        <Suspense fallback={<Loader />}>
          <MainScene />
        </Suspense>
      </div>

      {/* UI Sections */}
      <div className="content-overlay">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      {/* Global Styles */}
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

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }

        ::-webkit-scrollbar-thumb {
          background: #8b5cf6;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #c084fc;
        }

        /* Selection styles */
        ::selection {
          background: #8b5cf6;
          color: #ffffff;
        }

        ::-moz-selection {
          background: #8b5cf6;
          color: #ffffff;
        }

        /* Focus styles for accessibility */
        *:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }

        /* Loading animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .app {
            height: auto;
            min-height: 100vh;
          }
        }
      `}</style>
    </div>
  )
}

export default App
