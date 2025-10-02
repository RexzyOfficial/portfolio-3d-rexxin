import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { darkPurpleTheme, themeUtils } from '../../styles/themes'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const { colors, typography, animations } = darkPurpleTheme

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: animations.pageTransition.duration }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" style={{ color: colors.text.primary }}>
            Let's <span style={{ color: colors.primary }}>Connect</span>
          </h2>
          <p 
            className="section-subtitle"
            style={{ color: colors.text.secondary }}
          >
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: animations.pageTransition.duration, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: colors.text.primary }}>Get in Touch</h3>
            
            <div className="contact-methods">
              <div 
                className="contact-method"
                style={{
                  background: themeUtils.hexToRgba(colors.primary, 0.1),
                  border: `1px solid ${themeUtils.hexToRgba(colors.primary, 0.2)}`
                }}
              >
                <div 
                  className="method-icon" 
                  style={{ background: colors.primary }}
                >
                  ✉️
                </div>
                <div className="method-info">
                  <h4 style={{ color: colors.text.primary }}>Email</h4>
                  <p style={{ color: colors.primaryLight }}>rexxin@example.com</p>
                </div>
              </div>

              <div 
                className="contact-method"
                style={{
                  background: themeUtils.hexToRgba(colors.primaryDark, 0.1),
                  border: `1px solid ${themeUtils.hexToRgba(colors.primaryDark, 0.2)}`
                }}
              >
                <div 
                  className="method-icon" 
                  style={{ background: colors.primaryDark }}
                >
                  💼
                </div>
                <div className="method-info">
                  <h4 style={{ color: colors.text.primary }}>LinkedIn</h4>
                  <p style={{ color: colors.primaryLight }}>linkedin.com/in/rexxin</p>
                </div>
              </div>

              <div 
                className="contact-method"
                style={{
                  background: themeUtils.hexToRgba(colors.accent, 0.1),
                  border: `1px solid ${themeUtils.hexToRgba(colors.accent, 0.2)}`
                }}
              >
                <div 
                  className="method-icon" 
                  style={{ background: colors.accent }}
                >
                  🐙
                </div>
                <div className="method-info">
                  <h4 style={{ color: colors.text.primary }}>GitHub</h4>
                  <p style={{ color: colors.primaryLight }}>github.com/rexxin</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: animations.pageTransition.duration, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <label 
                htmlFor="name"
                style={{ color: colors.text.primary }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ 
                  borderColor: colors.primary,
                  background: themeUtils.hexToRgba(colors.text.primary, 0.05),
                  color: colors.text.primary
                }}
              />
            </div>

            <div className="form-group">
              <label 
                htmlFor="email"
                style={{ color: colors.text.primary }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ 
                  borderColor: colors.primary,
                  background: themeUtils.hexToRgba(colors.text.primary, 0.05),
                  color: colors.text.primary
                }}
              />
            </div>

            <div className="form-group">
              <label 
                htmlFor="message"
                style={{ color: colors.text.primary }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ 
                  borderColor: colors.primary,
                  background: themeUtils.hexToRgba(colors.text.primary, 0.05),
                  color: colors.text.primary
                }}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: animations.hover.scale }}
              whileTap={{ scale: 0.95 }}
              style={{ background: colors.primary }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      <footer 
        className="footer"
        style={{
          borderTop: `1px solid ${themeUtils.hexToRgba(colors.primary, 0.2)}`
        }}
      >
        <div className="container">
          <p style={{ color: colors.text.secondary }}>
            &copy; 2024 Rexxin Official. Built with React & Three.js
          </p>
        </div>
      </footer>

      <style>{`
        .contact-section {
          min-height: 100vh;
          padding: 8rem 2rem 4rem;
          background: ${themeUtils.hexToRgba(colors.background.card, 0.95)};
          position: relative;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: ${darkPurpleTheme.borderRadius.lg};
        }

        .method-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .method-info h4 {
          margin-bottom: 0.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: ${typography.weights.semibold};
        }

        .form-group input,
        .form-group textarea {
          padding: 1rem;
          border: 2px solid;
          border-radius: ${darkPurpleTheme.borderRadius.md};
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          background: ${themeUtils.hexToRgba(colors.text.primary, 0.1)};
        }

        .btn-primary {
          padding: 1rem 2rem;
          border: none;
          border-radius: ${darkPurpleTheme.borderRadius.lg};
          font-size: 1.1rem;
          font-weight: ${typography.weights.semibold};
          color: ${colors.text.primary};
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .footer {
          margin-top: 4rem;
          padding-top: 2rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-section {
            padding: 6rem 1rem 2rem;
          }
        }
      `}</style>
    </section>
  )
}