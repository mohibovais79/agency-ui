"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere({
  position,
  color,
  speed,
  distort = 0.4,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort?: number;
}) {
  return (
    <Float floatIntensity={0.55} rotationIntensity={0.45} speed={speed}>
      <Sphere args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          attach="material"
          color={color}
          distort={distort}
          emissive={color}
          emissiveIntensity={0.55}
          metalness={0.85}
          roughness={0.12}
          speed={2.2}
        />
      </Sphere>
    </Float>
  );
}

function DataNodes() {
  const groupRef = useRef<THREE.Group>(null);
  return (
    <group ref={groupRef}>
      <AnimatedSphere color="#8B5CF6" position={[0, 0, 0]}    speed={1.4}              />
      <AnimatedSphere color="#22D3EE" position={[3, 1, -2]}   speed={2.0} distort={0.35} />
      <AnimatedSphere color="#6D28D9" position={[-3, -1, -1]} speed={1.7}              />
      <AnimatedSphere color="#A78BFA" position={[2, -2, 1]}   speed={1.2} distort={0.45} />
      <AnimatedSphere color="#06B6D4" position={[-2, 2, 0]}   speed={1.6}              />
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
          toneMappingExposure: 1.4,
        }}
      >
        <color args={["#000000"]} attach="background" />
        <ambientLight intensity={1.0} />
        <pointLight color="#A78BFA" intensity={2.2} position={[10, 10, 10]} />
        <pointLight color="#22D3EE" intensity={1.6} position={[-10, -10, -10]} />
        <pointLight color="#8B5CF6" intensity={1.3} position={[0, 10, 0]} />
        <spotLight
          angle={0.3}
          color="#67E8F9"
          intensity={1.8}
          penumbra={1}
          position={[5, 5, 5]}
        />
        <DataNodes />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.45}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
