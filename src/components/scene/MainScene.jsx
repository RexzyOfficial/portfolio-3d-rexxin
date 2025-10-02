import React from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import CameraRig from './CameraRig'
import Lighting from '../effects/Lighting'
import QuantumParticles from '../effects/QuantumParticles'
import HeroModel from '../models/HeroModel'
import FloatingProjects from '../models/FloatingProjects'
import { darkPurpleTheme } from '../../styles/themes'

export default function MainScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ alpha: false, antialias: true }}
    >
      <color attach="background" args={[darkPurpleTheme.colors.background.dark]} />
      
      {/* Lighting dengan theme */}
      <Lighting />
      
      {/* Camera Controls */}
      <CameraRig />
      
      {/* 3D Models */}
      <HeroModel />
      <FloatingProjects />
      
      {/* Effects dengan theme */}
      <QuantumParticles 
        count={darkPurpleTheme.effects.particles.count}
        color={darkPurpleTheme.effects.particles.color}
      />
      
      {/* Post Processing dengan theme */}
      <EffectComposer>
        <Bloom
          intensity={darkPurpleTheme.effects.bloom.intensity}
          luminanceThreshold={darkPurpleTheme.effects.bloom.luminanceThreshold}
          luminanceSmoothing={darkPurpleTheme.effects.bloom.luminanceSmoothing}
          blendFunction={BlendFunction.ADD}
        />
        <ChromaticAberration
          offset={darkPurpleTheme.effects.chromaticAberration.offset}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </Canvas>
  )
}