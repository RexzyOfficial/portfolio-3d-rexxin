import React from 'react'

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.2} color="#8b5cf6" />
      
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        color="#a78bfa"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      <pointLight position={[-5, 3, 2]} intensity={0.8} color="#c084fc" />
      <pointLight position={[3, -3, 4]} intensity={0.6} color="#7c3aed" />
      
      <spotLight
        position={[0, 8, 0]}
        intensity={1}
        color="#8b5cf6"
        angle={0.3}
        penumbra={1}
        castShadow
      />
    </>
  )
}
