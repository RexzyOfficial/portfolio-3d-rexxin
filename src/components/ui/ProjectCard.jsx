import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { darkPurpleTheme, themeUtils } from '../../styles/themes'

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const { colors, typography, animations, shadows } = darkPurpleTheme

  return (
    <motion.div
      className={`project-card ${project.featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: colors.background.elevated,
        border: `1px solid ${project.featured ? colors.primary : themeUtils.hexToRgba(colors.primary, 0.2)}`,
        boxShadow: project.featured ? shadows.glow : 'none'
      }}
    >
      <div className="project-image">
        <div 
          className="image-placeholder"
          style={{ 
            background: project.featured 
              ? themeUtils.gradients.primary 
              : `linear-gradient(135deg, ${colors.primaryDark}, ${colors.accent})`
          }}
        >
          <span style={{ color: colors.text.primary }}>3D Preview</span>
        </div>
        
        {project.featured && (
          <div 
            className="featured-badge"
            style={{ background: colors.primary }}
          >
            Featured
          </div>
        )}
      </div>

      <div className="project-content">
        <h3 
          className="project-title"
          style={{ color: colors.text.primary }}
        >
          {project.title}
        </h3>
        <p 
          className="project-description"
          style={{ color: colors.text.secondary }}
        >
          {project.description}
        </p>
        
        <div className="project-tech">
          {project.tech.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="tech-tag"
              style={{ 
                background: themeUtils.hexToRgba(colors.primary, 0.1),
                color: colors.primaryLight,
                border: `1px solid ${themeUtils.hexToRgba(colors.primary, 0.3)}`
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.div 
          className="project-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={project.liveLink}
            className="btn btn-primary"
            whileHover={{ scale: animations.hover.scale }}
            whileTap={{ scale: 0.95 }}
            style={{ background: colors.primary }}
          >
            Live Demo
          </motion.a>
          
          <motion.a
            href={project.githubLink}
            className="btn btn-secondary"
            whileHover={{ scale: animations.hover.scale }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              borderColor: colors.primary, 
              color: colors.primary,
              background: 'transparent'
            }}
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .project-card {
          border-radius: ${darkPurpleTheme.borderRadius.xl};
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: ${colors.primary};
          box-shadow: ${shadows['2xl']};
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: ${typography.weights.semibold};
          font-size: 1.1rem;
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: ${colors.text.primary};
          font-size: 0.8rem;
          font-weight: ${typography.weights.semibold};
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: ${typography.weights.bold};
          margin-bottom: 0.5rem;
        }

        .project-description {
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: ${typography.weights.medium};
        }

        .project-actions {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.7rem 1.5rem;
          border-radius: ${darkPurpleTheme.borderRadius.md};
          text-decoration: none;
          font-weight: ${typography.weights.semibold};
          font-size: 0.9rem;
          transition: all 0.3s ease;
          flex: 1;
          text-align: center;
        }

        .btn-primary {
          color: ${colors.text.primary};
          border: none;
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid;
        }

        @media (max-width: 768px) {
          .project-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </motion.div>
  )
}