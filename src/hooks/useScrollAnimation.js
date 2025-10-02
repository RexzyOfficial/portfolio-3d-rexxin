import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

export function useScrollAnimation() {
  const scroll = useScroll()
  const groupRef = useRef()

  useFrame(() => {
    if (!groupRef.current) return

    // Parallax effect based on scroll
    const scrollOffset = scroll.offset
    
    // Vertical parallax
    groupRef.current.position.y = scrollOffset * -10
    
    // Rotation based on scroll
    groupRef.current.rotation.y = scrollOffset * Math.PI * 2
    
    // Scale effect
    const scale = 1 + scrollOffset * 0.5
    groupRef.current.scale.set(scale, scale, scale)
  })

  return groupRef
}