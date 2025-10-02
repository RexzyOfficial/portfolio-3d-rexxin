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
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A collection of my latest work in 3D web development
          </p>
        </motion.div>

        <div className="projects-content">
          <motion.div
            className="coming-soon"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>🚀 Projects Coming Soon</h3>
            <p>Working on amazing 3D interactive projects...</p>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          min-height: 100vh;
          padding: 100px 20px;
          background: #0a0a0a;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title {
          font-size: 48px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .section-subtitle {
          font-size: 20px;
          color: #a1a1aa;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .projects-content {
          text-align: center;
        }
        .coming-soon {
          padding: 80px 40px;
          border: 2px dashed #8b5cf6;
          border-radius: 20px;
          background: rgba(139, 92, 246, 0.05);
        }
        .coming-soon h3 {
          font-size: 32px;
          color: #8b5cf6;
          margin-bottom: 16px;
        }
        .coming-soon p {
          font-size: 18px;
          color: #a1a1aa;
        }
        @media (max-width: 768px) {
          .projects-section {
            padding: 80px 16px;
          }
          .section-title {
            font-size: 36px;
          }
          .coming-soon {
            padding: 60px 20px;
          }
        }
      `}</style>
    </section>
  )
}
