import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { darkPurpleTheme } from '../../styles/themes'

export default function QuantumParticles({ 
  count = darkPurpleTheme.effects.particles.count,
  color = darkPurpleTheme.effects.particles.color 
}) {
  const points = useRef()
  const { effects } = darkPurpleTheme

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
    }
    
    return positions
  }, [count])

  useFrame((state) => {
    if (!points.current) return
    
    const positions = points.current.geometry.attributes.position.array
    const time = state.clock.elapsedTime
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Quantum wave animation
      const wave1 = Math.sin(time * 2 + i * 0.01) * 0.1
      const wave2 = Math.cos(time * 1.5 + i * 0.005) * 0.1
      const wave3 = Math.sin(time * 0.7 + i * 0.002) * 0.1
      
      positions[i3] += wave1
      positions[i3 + 1] += wave2
      positions[i3 + 2] += wave3
    }
    
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={effects.particles.size}
        color={color}
        transparent
        opacity={effects.particles.opacity}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  )
}