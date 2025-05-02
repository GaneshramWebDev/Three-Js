import React from 'react'
import { Environment, Center } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useSnapshot } from 'valtio'

import Backdrop from './Backdrop'
import CameraRig from './CameraRig'
import Shirt from './Shirt'
import state from '../store'

const CanvasModel = () => {
  const snap = useSnapshot(state)

  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 2.5], fov: 25 }}
      style={{
        background: snap.color, 
        
      }}
      className='w-full h-full max-w-full'
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel
