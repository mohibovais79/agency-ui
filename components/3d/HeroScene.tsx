"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  MeshDistortMaterial,
  Sphere,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere({
  position,
  color,
  speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  return (
    <Float floatIntensity={0.5} rotationIntensity={0.5} speed={speed}>
      <Sphere args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          attach="material"
          color={color}
          distort={0.4}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

function DataNodes() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      <AnimatedSphere color="#19C4D4" position={[0, 0, 0]} speed={1.5} />
      <AnimatedSphere color="#7C3AED" position={[3, 1, -2]} speed={2} />
      <AnimatedSphere color="#06B6D4" position={[-3, -1, -1]} speed={1.8} />
      <AnimatedSphere color="#8B5CF6" position={[2, -2, 1]} speed={1.3} />
      <AnimatedSphere color="#14B8A6" position={[-2, 2, 0]} speed={1.6} />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.5,
        }}
      >
        <color args={["#000000"]} attach="background" />
        <ambientLight intensity={1.2} />
        <pointLight color="#ffffff" intensity={2} position={[10, 10, 10]} />
        <pointLight
          color="#19C4D4"
          intensity={1.5}
          position={[-10, -10, -10]}
        />
        <pointLight color="#7C3AED" intensity={1.2} position={[0, 10, 0]} />
        <spotLight
          angle={0.3}
          color="#06B6D4"
          intensity={2}
          penumbra={1}
          position={[5, 5, 5]}
        />
        <DataNodes />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
