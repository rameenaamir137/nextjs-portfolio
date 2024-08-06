// components/EarthAnimation.tsx
"use client"
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 32, 32]}>
      <meshStandardMaterial
        attach="material"
        map={new THREE.TextureLoader().load('/earth-texture.jpg')}
      />
    </Sphere>
  );
};

const EarthAnimation = () => (
  <div className="h-screen">
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Earth />
    </Canvas>
  </div>
);

export default EarthAnimation;
