"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function GoldParticles({ count = 60 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#d4af37"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.15;

    // Mouse interaction
    const mx = state.pointer.x * 0.3;
    const my = state.pointer.y * 0.2;
    groupRef.current.rotation.y += mx * 0.5;
    groupRef.current.rotation.x += my * 0.3;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial
            color="#d4af37"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh position={[1.8, 0.5, -0.5]} scale={0.4}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#d4af37"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[-1.6, -0.3, 0.5]} scale={0.3}>
          <tetrahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#d4af37"
            wireframe
            transparent
            opacity={0.1}
          />
        </mesh>
      </Float>

      {/* Thin ring */}
      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.2}>
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[2, 0.008, 8, 64]} />
          <meshStandardMaterial
            color="#d4af37"
            transparent
            opacity={0.08}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HomeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#d4af37" />
      <FloatingGeometry />
      <GoldParticles />
    </Canvas>
  );
}
