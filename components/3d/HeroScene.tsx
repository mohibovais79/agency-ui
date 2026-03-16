"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere args={[1, 64, 64]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.1}
                    metalness={0.9}
                    emissive={color}
                    emissiveIntensity={0.5}
                />
            </Sphere>
        </Float>
    );
}

function DataNodes() {
    const groupRef = useRef<THREE.Group>(null);
    
    return (
        <group ref={groupRef}>
            <AnimatedSphere position={[0, 0, 0]} color="#19C4D4" speed={1.5} />
            <AnimatedSphere position={[3, 1, -2]} color="#7C3AED" speed={2} />
            <AnimatedSphere position={[-3, -1, -1]} color="#06B6D4" speed={1.8} />
            <AnimatedSphere position={[2, -2, 1]} color="#8B5CF6" speed={1.3} />
            <AnimatedSphere position={[-2, 2, 0]} color="#14B8A6" speed={1.6} />
        </group>
    );
}

export function HeroScene() {
    return (
        <div className="h-full w-full">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.5 }}
                dpr={[1, 2]}
            >
                <color attach="background" args={["#000000"]} />
                <ambientLight intensity={1.2} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} color="#19C4D4" intensity={1.5} />
                <pointLight position={[0, 10, 0]} color="#7C3AED" intensity={1.2} />
                <spotLight position={[5, 5, 5]} intensity={2} angle={0.3} penumbra={1} color="#06B6D4" />
                <DataNodes />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
}
