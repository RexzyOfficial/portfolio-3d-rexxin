import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../ui/Navigation'
import { darkPurpleTheme, themeUtils } from '../../styles/themes'

export default function HeroSection() {
  const { colors, typography, animations } = darkPurpleTheme

  return (
    <>
      <Navigation />
      
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animations.pageTransition.duration }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ color: colors.text.primary }}
          >
            Hi, I'm <span style={{ color: colors.primary }}>Rexxin</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ color: colors.text.secondary }}
          >
            Frontend Developer specializing in 
            <span style={{ color: colors.accent }}> 3D Experiences</span> 
            and Interactive Web Applications
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: animations.hover.scale }}
              whileTap={{ scale: 0.95 }}
              style={{ background: colors.primary }}
            >
              View Projects
            </motion.button>
            
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: animations.hover.scale }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                borderColor: colors.primary, 
                color: colors.primary,
                background: 'transparent'
              }}
            >
              Download CV
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            style={{ color: colors.primaryLight }}
          >
            <div 
              className="scroll-line" 
              style={{ background: colors.primary }}
            ></div>
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>
        
        <style>{`
          .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 2rem;
            position: relative;
          }
          
          .hero-content {
            text-align: center;
            max-width: 800px;
          }
          
          .hero-title {
            font-size: 4rem;
            font-weight: ${typography.weights.extrabold};
            margin-bottom: 1.5rem;
            background: ${themeUtils.gradients.primary};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 3rem;
            line-height: 1.6;
          }
          
          .hero-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            margin-bottom: 4rem;
          }
          
          .btn {
            padding: 1rem 2rem;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: ${typography.weights.semibold};
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .btn-primary {
            color: ${colors.text.primary};
          }
          
          .btn-secondary {
            background: transparent;
            border: 2px solid;
          }
          
          .hero-scroll-indicator {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          
          .scroll-line {
            width: 2px;
            height: 50px;
            border-radius: 1px;
            animation: scrollBounce 2s infinite;
          }
          
          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
            
            .hero-subtitle {
              font-size: 1.2rem;
            }
            
            .hero-buttons {
              flex-direction: column;
              align-items: center;
            }
          }
        `}</style>
      </section>
    </>
  )
}