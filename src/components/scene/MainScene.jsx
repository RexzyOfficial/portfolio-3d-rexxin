import React from 'react'
import { Canvas } from '@react-three/fiber'

export default function MainScene() {
  return (
    <Canvas style={{ background: '#0a0a0a' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
    </Canvas>
  )
}
