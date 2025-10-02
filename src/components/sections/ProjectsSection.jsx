import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Featured <span style={{ color: '#8b5cf6' }}>Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of my latest work in 3D web development and interactive experiences
          </p>
        </motion.div>

        <div className="projects-placeholder">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Projects Coming Soon!</h3>
            <p>Working on some amazing 3D projects...</p>
          </motion.div>
        </div>
      </div>

      <style>{`
        .projects-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: rgba(10, 10, 10, 0.9);
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
          font-weight: 800;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #a1a1aa;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .projects-placeholder {
          text-align: center;
          padding: 4rem 2rem;
        }

        .projects-placeholder h3 {
          font-size: 2rem;
          color: #8b5cf6;
          margin-bottom: 1rem;
        }

        .projects-placeholder p {
          font-size: 1.1rem;
          color: #a1a1aa;
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 6rem 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  )
      }          color: ${colors.text.primary};
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
