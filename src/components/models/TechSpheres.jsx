import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const technologies = [
  { name: "React", position: [-3, -1, 2], size: 0.8 },
  { name: "Three.js", position: [3, -1, 1], size: 0.7 },
  { name: "TypeScript", position: [0, -2, 3], size: 0.6 }
]

export default function TechSpheres() {
  return (
    <group>
      {technologies.map((tech, index) => (
        <TechSphere key={tech.name} tech={tech} index={index} />
      ))}
    </group>
  )
}

function TechSphere({ tech, index }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      // Orbiting animation
      const time = state.clock.elapsedTime
      const angle = time * 0.5 + index * 2
      const radius = 2 + Math.sin(time * 0.3 + index) * 0.5
      
      meshRef.current.position.x = Math.cos(angle) * radius
      meshRef.current.position.z = Math.sin(angle) * radius
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={meshRef} position={tech.position}>
      <mesh castShadow>
        <sphereGeometry args={[tech.size, 16, 16]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={0.4}
          transparent
          opacity={0.8}
          wireframe
        />
      </mesh>

      <Text
        position={[0, 0, tech.size + 0.2]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {tech.name}
      </Text>
    </group>
  )
}