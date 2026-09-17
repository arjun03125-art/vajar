"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function RotatingCube({ position, size = 0.6, speed = 1 }: { position: [number, number, number]; size?: number; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4 * speed;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color="#d4af37"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
}

function QuestionMark({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + position[0]) * 0.15;
  });

  return (
    <group ref={ref} position={position}>
      {/* Question mark curve - torus arc */}
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[0.2, 0.04, 8, 16, Math.PI * 1.4]} />
        <meshStandardMaterial color="#d4af37" transparent opacity={0.25} />
      </mesh>
      {/* Dot */}
      <mesh position={[0.1, -0.35, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#d4af37" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function Particles({ count = 50 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 7;
      p[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return p;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#d4af37" transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += state.pointer.x * 0.008;
    groupRef.current.rotation.x += state.pointer.y * 0.004;
  });

  return (
    <group ref={groupRef}>
      <RotatingCube position={[0, 0, 0]} size={1} speed={0.6} />
      <RotatingCube position={[-2, 0.8, -1]} size={0.5} speed={0.9} />
      <RotatingCube position={[2.2, -0.5, -0.8]} size={0.4} speed={1.2} />
      <RotatingCube position={[-1.5, -0.8, 0.5]} size={0.3} speed={0.7} />
      <QuestionMark position={[1, 1, 0.5]} />
      <QuestionMark position={[-1.8, 0.2, -0.5]} />
      <Particles />
    </group>
  );
}

export default function QuizScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 3, 5]} intensity={0.5} color="#d4af37" />
      <pointLight position={[-3, -2, 3]} intensity={0.2} color="#e8d5a3" />
      <Scene />
    </Canvas>
  );
}
