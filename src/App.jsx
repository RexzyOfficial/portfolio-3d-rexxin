import React, { Suspense } from 'react'
import MainScene from './components/scene/MainScene'
import Loader from './components/ui/Loader'
import HeroSection from './components/sections/HeroSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import { darkPurpleTheme } from './styles/themes'

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
          background: ${darkPurpleTheme.colors.background.dark};
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
          background: ${darkPurpleTheme.colors.background.dark};
        }

        ::-webkit-scrollbar-thumb {
          background: ${darkPurpleTheme.colors.primary};
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${darkPurpleTheme.colors.accent};
        }

        /* Selection styles */
        ::selection {
          background: ${darkPurpleTheme.colors.primary};
          color: ${darkPurpleTheme.colors.text.primary};
        }

        ::-moz-selection {
          background: ${darkPurpleTheme.colors.primary};
          color: ${darkPurpleTheme.colors.text.primary};
        }

        /* Focus styles for accessibility */
        *:focus {
          outline: 2px solid ${darkPurpleTheme.colors.primary};
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
        @media (max-width: ${darkPurpleTheme.breakpoints.mobile}) {
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