import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { darkPurpleTheme } from '../../styles/themes'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const { colors, typography, animations } = darkPurpleTheme

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav 
      className="navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: animations.pageTransition.duration }}
      style={{
        background: themeUtils.hexToRgba(colors.background.dark, 0.8),
        borderBottom: `1px solid ${themeUtils.hexToRgba(colors.primary, 0.2)}`
      }}
    >
      <div className="nav-brand">
        <span className="brand-text" style={{ color: colors.text.primary }}>
          Rexxin
        </span>
        <span className="brand-dot" style={{ color: colors.primary }}>.</span>
      </div>
      
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.id}>
            <motion.a
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
              whileHover={{ scale: animations.hover.scale }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                color: activeSection === item.id ? colors.text.primary : colors.text.secondary
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div 
                  className="nav-indicator"
                  layoutId="nav-indicator"
                  style={{ background: colors.primary }}
                />
              )}
            </motion.a>
          </li>
        ))}
      </ul>
      
      <style>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 2rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }
        
        .nav-brand {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: ${typography.weights.bold};
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        
        .nav-link {
          text-decoration: none;
          font-weight: ${typography.weights.medium};
          padding: 0.5rem 1rem;
          border-radius: 8px;
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: ${colors.text.primary} !important;
        }
        
        .nav-indicator {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
      `}</style>
    </motion.nav>
  )
}