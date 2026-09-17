"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingPaper({ position, rotation, scale = 1 }: { position: [number, number, number]; rotation: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = rotation[2] + Math.sin(t * 0.3 + position[0]) * 0.05;
    ref.current.position.y = position[1] + Math.sin(t * 0.5 + position[0] * 2) * 0.1;
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
        <planeGeometry args={[0.8, 1.1]} />
        <meshStandardMaterial
          color="#e8d5a3"
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Page lines */}
      {[0.25, 0.1, -0.05, -0.2, -0.35].map((y, i) => (
        <mesh key={i} position={[position[0], position[1] + y * scale, position[2] + 0.01]} rotation={rotation} scale={scale}>
          <planeGeometry args={[0.55, 0.008]} />
          <meshStandardMaterial color="#d4af37" transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </Float>
  );
}

function Pen({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.15 - 0.5;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.15}>
      <group ref={ref} position={position} rotation={[0, 0, -0.5]}>
        {/* Pen body */}
        <mesh>
          <cylinderGeometry args={[0.025, 0.025, 1.4, 8]} />
          <meshStandardMaterial color="#d4af37" transparent opacity={0.25} />
        </mesh>
        {/* Pen tip */}
        <mesh position={[0, -0.75, 0]}>
          <coneGeometry args={[0.025, 0.12, 8]} />
          <meshStandardMaterial color="#e8d5a3" transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function TextParticles({ count = 45 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 9;
      p[i * 3 + 1] = (Math.random() - 0.5) * 7;
      p[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return p;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.018;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#d4af37" transparent opacity={0.3} sizeAttenuation />
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
      <FloatingPaper position={[0, 0.2, 0]} rotation={[0.1, 0.1, 0.05]} scale={1.3} />
      <FloatingPaper position={[-1.8, 0.5, -0.8]} rotation={[0, -0.2, -0.1]} scale={0.8} />
      <FloatingPaper position={[1.6, -0.3, -0.5]} rotation={[0.05, 0.3, 0.08]} scale={0.7} />
      <FloatingPaper position={[0.8, 1, -1]} rotation={[-0.1, 0.15, -0.05]} scale={0.5} />
      <Pen position={[1.2, 0.5, 0.5]} />
      <TextParticles />
    </group>
  );
}

export default function EssayScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[3, 3, 4]} intensity={0.4} color="#d4af37" />
      <pointLight position={[-2, -2, 3]} intensity={0.2} color="#f0e4c4" />
      <Scene />
    </Canvas>
  );
}
