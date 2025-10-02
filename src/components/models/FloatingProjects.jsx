import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { darkPurpleTheme } from '../../styles/themes'

const projects = [
  {
    id: 1,
    title: "E-Commerce",
    tech: "React • Node.js",
    position: [-4, 1, 0],
    color: "primary"
  },
  {
    id: 2, 
    title: "Dashboard",
    tech: "Vue • Firebase",
    position: [0, 2, -2],
    color: "accent"
  },
  {
    id: 3,
    title: "Mobile App",
    tech: "React Native",
    position: [4, 0, 1],
    color: "primaryDark"
  }
]

export default function FloatingProjects() {
  const { colors } = darkPurpleTheme
  
  const projectConfigs = projects.map(project => ({
    ...project,
    colorValue: colors[project.color] || colors.primary
  }))

  return (
    <group>
      {projectConfigs.map((project, index) => (
        <FloatingProject key={project.id} project={project} index={index} />
      ))}
    </group>
  )
}

function FloatingProject({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const meshRef = useRef()
  const { colors, animations } = darkPurpleTheme

  useFrame((state) => {
    if (meshRef.current) {
      // Individual floating animation
      meshRef.current.position.y = project.position[1] + 
        Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.3
      
      // Hover rotation
      if (hovered) {
        meshRef.current.rotation.y += 0.02
      }
    }
  })

  const hoverColor = colors.accent
  const baseColor = project.colorValue

  return (
    <Float 
      speed={animations.floating.speed + 1}
      rotationIntensity={animations.floating.rotationIntensity}
      floatIntensity={animations.floating.floatIntensity + 1}
    >
      <group position={project.position} ref={meshRef}>
        {/* Project Cube */}
        <mesh
          castShadow
          receiveShadow
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          onClick={() => console.log(`Clicked ${project.title}`)}
        >
          <boxGeometry args={[1.5, 1.5, 0.1]} />
          <meshStandardMaterial 
            color={hovered ? hoverColor : baseColor}
            emissive={hovered ? colors.primaryLight : baseColor}
            emissiveIntensity={hovered ? 0.8 : 0.3}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Project Title */}
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.15}
          color={colors.text.primary}
          anchorX="center"
          anchorY="middle"
          maxWidth={1.2}
        >
          {project.title}
        </Text>

        {/* Project Tech */}
        <Text
          position={[0, -0.3, 0.1]}
          fontSize={0.08}
          color={colors.primaryLight}
          anchorX="center"
          anchorY="middle"
        >
          {project.tech}
        </Text>

        {/* Sparkles Effect on Hover */}
        {hovered && (
          <Sparkles 
            count={15} 
            scale={[2, 2, 0.2]} 
            color={colors.accent} 
            speed={0.4} 
            size={3}
          />
        )}
      </group>
    </Float>
  )
}