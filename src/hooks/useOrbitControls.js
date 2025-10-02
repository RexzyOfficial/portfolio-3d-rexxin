import { useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export function useOrbitControls() {
  const { camera, mouse } = useThree()
  const currentPosition = useRef(new THREE.Vector3())
  const currentLookat = useRef(new THREE.Vector3())
  
  useFrame((state, delta) => {
    // Mouse follow with smooth interpolation
    const mouseX = mouse.x * 0.8
    const mouseY = mouse.y * 0.5

    // Calculate target position with mouse influence
    const targetX = mouseX
    const targetY = mouseY + 2
    const targetZ = 8

    // Smooth interpolation
    currentPosition.current.lerp(
      new THREE.Vector3(targetX, targetY, targetZ),
      delta * 2
    )
    
    // Look at point with mouse influence
    const lookAtX = mouseX * 0.5
    const lookAtY = mouseY * 0.3
    
    currentLookat.current.lerp(
      new THREE.Vector3(lookAtX, lookAtY, 0),
      delta * 3
    )

    // Update camera
    camera.position.copy(currentPosition.current)
    camera.lookAt(currentLookat.current)
  })
}