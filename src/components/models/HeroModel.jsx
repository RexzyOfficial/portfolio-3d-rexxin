import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { darkPurpleTheme } from '../../styles/themes'

export default function HeroModel() {
  const groupRef = useRef()
  const { colors, materials, animations } = darkPurpleTheme
  
  // Load your custom GLB model
  const gltf = useLoader(GLTFLoader, '/models/placeholder.glb')

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[2, 2, 2]}>
      <Float 
        speed={animations.floating.speed}
        rotationIntensity={animations.floating.rotationIntensity}
        floatIntensity={animations.floating.floatIntensity}
      >
        {/* Your Custom 3D Model */}
        <primitive 
          object={gltf.scene} 
          castShadow 
          receiveShadow
        />
        
        {/* Floating Text */}
        <Text
          position={[0, 3, 0]}
          fontSize={0.8}
          color={colors.text.primary}
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          REXXIN
          <meshStandardMaterial
            color={colors.text.primary}
            emissive={colors.primaryLight}
            emissiveIntensity={0.5}
          />
        </Text>

        <Text
          position={[0, 2, 0]}
          fontSize={0.3}
          color={colors.primaryLight}
          anchorX="center"
          anchorY="middle"
        >
          Frontend Developer
          <meshStandardMaterial
            color={colors.primaryLight}
            emissive={colors.accent}
            emissiveIntensity={0.3}
          />
        </Text>
      </Float>
    </group>
  )
}