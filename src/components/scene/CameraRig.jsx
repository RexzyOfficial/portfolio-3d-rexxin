import React, { useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

export default function CameraRig() {
  const { camera, mouse } = useThree()
  const scroll = useScroll()
  const groupRef = useRef()

  useFrame((state, delta) => {
    // Mouse follow with smooth interpolation
    const mouseX = mouse.x * 0.5
    const mouseY = mouse.y * 0.5

    // Scroll-based camera movement
    const scrollOffset = scroll.offset
    
    // Calculate target position
    const targetX = mouseX + (scrollOffset * 2)
    const targetY = mouseY + 2
    const targetZ = 8 - (scrollOffset * 5)

    // Smooth interpolation
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, delta * 2)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, delta * 2)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, delta * 2)

    // Look at point with mouse influence
    const lookAtX = mouseX * 0.3
    const lookAtY = mouseY * 0.3
    
    camera.lookAt(lookAtX, lookAtY, 0)
  })

  return <group ref={groupRef} />
}