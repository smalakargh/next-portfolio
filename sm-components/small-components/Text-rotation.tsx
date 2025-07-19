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
        depth={4}
        curveSegments={12}
        bevelEnabled
        bevelSize={0.05}
        bevelThickness={0.1}
        height={0.3}
      >
        Coding Is An Emotion
      </Text>

      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default Textrot;
