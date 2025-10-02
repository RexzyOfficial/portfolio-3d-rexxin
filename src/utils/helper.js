import * as THREE from 'three'

// Helper function to create floating animation
export const createFloatingAnimation = (speed = 1, intensity = 1) => {
  return (state, delta, index = 0) => {
    const time = state.clock.elapsedTime
    return Math.sin(time * speed + index) * intensity
  }
}

// Helper to generate random positions in sphere
export const generateSpherePosition = (radius = 5) => {
  const theta = Math.random() * Math.PI * 2
  const phi = Math.acos(2 * Math.random() - 1)
  
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta), 
    radius * Math.cos(phi)
  ]
}

// Color utilities
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : null
}

// Animation helpers
export const lerp = (start, end, factor) => {
  return start + (end - start) * factor
}