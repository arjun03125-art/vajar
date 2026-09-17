"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function RibbonMesh({ color = "#d4af37", speed = 1 }: { color?: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.4;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3 * speed) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.2, 0.25, 128, 32, 2, 5]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        wireframe={false}
        emissive="#554000"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function DynamicParticles({ count = 80 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sca = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      sca[i] = Math.random() * 0.08 + 0.02;
    }
    return [pos, sca];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#f3e5ab"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function DanceScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff" />
      <pointLight position={[-5, -5, -2]} intensity={0.8} color="#d4af37" />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.2}>
        <RibbonMesh color="#d4af37" speed={1} />
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <group position={[1.8, 1.2, -1]}>
          <RibbonMesh color="#f3e5ab" speed={0.7} />
        </group>
      </Float>

      <DynamicParticles count={90} />
    </Canvas>
  );
}
