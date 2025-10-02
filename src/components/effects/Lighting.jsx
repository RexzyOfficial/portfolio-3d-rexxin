import React from 'react'
import { darkPurpleTheme } from '../../styles/themes'

export default function Lighting() {
  const { lighting } = darkPurpleTheme

  return (
    <>
      {/* Ambient Light */}
      <ambientLight 
        color={lighting.ambient.color} 
        intensity={lighting.ambient.intensity} 
      />
      
      {/* Main Directional Light */}
      <directionalLight
        position={lighting.directional.position}
        intensity={lighting.directional.int