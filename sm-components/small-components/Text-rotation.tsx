'use client';
import { OrbitControls, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

function Textrot() {
  return (
    <Canvas>
      <ambientLight />

      <Text
        position={[0, 0, 0]}
        fontSize={1}
        font="/fonts/Poppins-Bold.ttf" // ✅ Correct path: public folder is root
        color="#616161"
        anchorX="center"
        anchorY="middle"
      >
        Coding Is An Emotion
      </Text>

      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default Textrot;
