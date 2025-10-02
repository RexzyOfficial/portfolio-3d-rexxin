import React, { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { darkPurpleTheme } from '../../styles/themes'

// Custom Shader Material dengan theme
const HologramMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(...Object.values(darkPurpleTheme.colors.primary).map(c => parseInt(c.replace('#', ''), 16))),
    opacity: 0.6
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader dengan theme colors
  `
    uniform float time;
    uniform vec3 color;
    uniform float opacity;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      // Scan lines
      float scanLine = mod(vUv.y * 50.0 + time * 5.0, 1.0);
      float scanIntensity = scanLine > 0.7 ? 1.0 : 0.3;
      
      // Wave distortion
      float wave = sin(vUv.y * 20.0 + time * 3.0) * 0.1;
      
      // Glow effect dengan color dari theme
      float glow = sin(time * 2.0 + vPosition.x * 5.0) * 0.5 + 0.5;
      
      vec3 finalColor = color * scanIntensity + glow * 0.3;
      float alpha = opacity * scanIntensity;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `
)

extend({ HologramMaterial })

export default function PurpleHologram() {
  const meshRef = useRef()
  const materialRef = useRef()
  const { colors } = darkPurpleTheme

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.time = state.clock.elapsedTime
    }
    
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={[0, -3, 0]} rotation={[-Math.PI / 6, 0, 0]}>
      <planeGeometry args={[8, 4, 16, 16]} />
      <hologramMaterial
        ref={materialRef}
        color={new THREE.Color(colors.primary)}
        opacity={0.4}
        transparent
      />
    </mesh>
  )
}