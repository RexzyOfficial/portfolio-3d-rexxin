import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard.jsx'
import { darkPurpleTheme, themeUtils } from '../../styles/themes.js'

const projects = [
  {
    id: 1,
    title: "3D E-Commerce Platform",
    description: "Immersive shopping experience with Three.js and React",
    tech: ["React", "Three.js", "Node.js", "MongoDB"],
    image: "/projects/ecommerce.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: "Real-time analytics with machine learning integration",
    tech: ["Vue.js", "Python", "TensorFlow", "Firebase"],
    image: "/projects/dashboard.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking with social features",
    tech: ["React Native", "GraphQL", "AWS", "Redis"],
    image: "/projects/fitness.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    featured: false
  }
]

export default function ProjectsSection() {
  const { colors, typography, animations } = darkPurpleTheme

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: animations.pageTransition.duration }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" style={{ color: colors.text.primary }}>
            Featured <span style={{ color: colors.primary }}>Projects</span>
          </h2>
          <p 
            className="section-subtitle"
            style={{ color: colors.text.secondary }}
          >
            A collection of my latest work in 3D web development and interactive experiences
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        <motion.div 
          className="section-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: animations.pageTransition.duration, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn btn-outline"
            whileHover={{ scale: animations.hover.scale }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              borderColor: colors.primary, 
              color: colors.primary,
              background: 'transparent'
            }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        .projects-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: ${themeUtils.hexToRgba(colors.background.dark, 0.9)};
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: ${typography.weights.extrabold};
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .section-footer {
          text-align: center;
        }

        .btn-outline {
          border: 2px solid;
          padding: 1rem 2.5rem;
          border-radius: ${darkPurpleTheme.borderRadius.lg};
          font-size: 1.1rem;
          font-weight: ${typography.weights.semibold};
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: ${colors.primary};
          color: ${colors.text.primary};
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 6rem 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
    }]

export default function ProjectsSection() {
  const { colors, typography, animations } = darkPurpleTheme

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: animations.pageTransition.duration }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" style={{ color: colors.text.primary }}>
            Featured <span style={{ color: colors.primary }}>Projects</span>
          </h2>
          <p 
            className="section-subtitle"
            style={{ color: colors.text.secondary }}
          >
            A collection of my latest work in 3D web development and interactive experiences
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        <motion.div 
          className="section-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: animations.pageTransition.duration, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn btn-outline"
            whileHover={{ scale: animations.hover.scale }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              borderColor: colors.primary, 
              color: colors.primary,
              background: 'transparent'
            }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        .projects-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: ${themeUtils.hexToRgba(colors.background.dark, 0.9)};
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: ${typography.weights.extrabold};
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .section-footer {
          text-align: center;
        }

        .btn-outline {
          border: 2px solid;
          padding: 1rem 2.5rem;
          border-radius: ${darkPurpleTheme.borderRadius.lg};
          font-size: 1.1rem;
          font-weight: ${typography.weights.semibold};
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: ${colors.primary};
          color: ${colors.text.primary};
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 6rem 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
