import React from 'react'
import { Html } from '@react-three/drei'
import { darkPurpleTheme } from '../../styles/themes'

export default function Loader() {
  const { colors, typography } = darkPurpleTheme

  return (
    <Html center>
      <div className="loader-container">
        <div 
          className="loader-spinner"
          style={{
            border: `3px solid ${colors.primaryDark}`,
            borderTop: `3px solid ${colors.accent}`
          }}
        ></div>
        <div 
          className="loader-text"
          style={{ color: colors.text.primary }}
        >
          Loading Quantum Portfolio...
        </div>
        <div 
          className="loader-subtext"
          style={{ color: colors.primaryLight }}
        >
          Rexxin Official
        </div>
      </div>
      
      <style>{`
        .loader-container {
          text-align: center;
        }
        
        .loader-spinner {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }
        
        .loader-text {
          font-size: 18px;
          margin-bottom: 8px;
          font-weight: ${typography.weights.semibold};
        }
        
        .loader-subtext {
          font-size: 14px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Html>
  )
}