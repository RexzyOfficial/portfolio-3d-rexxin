// themes.js - Centralized theme configuration for 3D Portfolio

export const darkPurpleTheme = {
  // Color Palette
  colors: {
    // Primary Purples
    primary: '#8b5cf6',
    primaryDark: '#7c3aed',
    primaryLight: '#a78bfa',
    primaryLighter: '#c4b5fd',
    
    // Accent Purples
    accent: '#c084fc',
    accentDark: '#a855f7',
    accentLight: '#d8b4fe',
    
    // Neutrals
    background: {
      dark: '#0a0a0a',
      card: '#111111',
      elevated: '#1a1a1a',
      overlay: 'rgba(10, 10, 10, 0.8)'
    },
    
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa',
      tertiary: '#71717a',
      inverse: '#0a0a0a'
    },
    
    // States
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },

  // 3D Materials Configuration
  materials: {
    hologram: {
      color: '#8b5cf6',
      emissive: '#7c3aed',
      emissiveIntensity: 0.3,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9
    },
    
    glass: {
      color: '#a78bfa',
      transparent: true,
      opacity: 0.1,
      metalness: 0.9,
      roughness: 0.1
    },
    
    metal: {
      color: '#8b5cf6',
      metalness: 1.0,
      roughness: 0.1,
      emissive: '#7c3aed',
      emissiveIntensity: 0.1
    },
    
    wireframe: {
      color: '#8b5cf6',
      wireframe: true,
      transparent: true,
      opacity: 0.6
    }
  },

  // Lighting Configuration
  lighting: {
    ambient: {
      color: '#8b5cf6',
      intensity: 0.2
    },
    
    directional: {
      color: '#a78bfa',
      intensity: 1.5,
      position: [5, 5, 5]
    },
    
    pointLights: [
      {
        color: '#c084fc',
        intensity: 0.8,
        position: [-5, 3, 2]
      },
      {
        color: '#7c3aed',
        intensity: 0.6,
        position: [3, -3, 4]
      }
    ],
    
    spotLight: {
      color: '#8b5cf6',
      intensity: 1,
      position: [0, 8, 0]
    }
  },

  // Effects Configuration
  effects: {
    bloom: {
      intensity: 1.2,
      luminanceThreshold: 0.4,
      luminanceSmoothing: 0.9
    },
    
    chromaticAberration: {
      offset: [0.001, 0.001]
    },
    
    particles: {
      color: '#8b5cf6',
      count: 3000,
      size: 0.02,
      opacity: 0.4
    }
  },

  // Animation Configuration
  animations: {
    floating: {
      speed: 2,
      rotationIntensity: 1,
      floatIntensity: 1
    },
    
    hover: {
      scale: 1.05,
      duration: 0.3
    },
    
    pageTransition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  },

  // Typography Scale
  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      mono: "'Fira Code', monospace"
    },
    
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem'
    },
    
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    }
  },

  // Spacing Scale
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem'
  },

  // Breakpoints
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
    wide: '1400px'
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(139, 92, 246, 0.05)',
    md: '0 4px 6px -1px rgba(139, 92, 246, 0.1), 0 2px 4px -1px rgba(139, 92, 246, 0.06)',
    lg: '0 10px 15px -3px rgba(139, 92, 246, 0.1), 0 4px 6px -2px rgba(139, 92, 246, 0.05)',
    xl: '0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)',
    '2xl': '0 25px 50px -12px rgba(139, 92, 246, 0.25)',
    glow: '0 0 30px rgba(139, 92, 246, 0.3)',
    'glow-lg': '0 0 60px rgba(139, 92, 246, 0.4)'
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  }
}

// Utility functions for theme
export const themeUtils = {
  // Convert hex to rgba
  hexToRgba: (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  },

  // Generate gradient
  gradient: (direction = 'to right', ...colors) => {
    return `linear-gradient(${direction}, ${colors.join(', ')})`
  },

  // Purple gradient variants
  gradients: {
    primary: 'linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)',
    dark: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
    light: 'linear-gradient(135deg, #a78bfa 0%, #d8b4fe 100%)',
    hologram: 'linear-gradient(135deg, rgba(139, 92, 246, 0.8) 0%, rgba(192, 132, 252, 0.6) 50%, rgba(139, 92, 246, 0.8) 100%)'
  },

  // Animation keyframes
  keyframes: {
    float: `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
    `,
    glow: `
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 5px rgba(139, 92, 246, 0.5); }
        50% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6); }
      }
    `,
    slideIn: `
      @keyframes slideIn {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `
  }
}

// Export default theme
export default darkPurpleTheme