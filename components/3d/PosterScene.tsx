"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingFrame({ position, rotation, scale = 1 }: { position: [number, number, number]; rotation: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.003;
    ref.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.001;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={ref} position={position} rotation={rotation} scale={scale}>
        {/* Frame edges */}
        <mesh>
          <boxGeometry args={[1.6, 0.06, 0.06]} />
          <meshStandardMaterial color="#d4af37" transparent opacity={0.3} />
        </mesh>
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[1.6, 0.06, 0.06]} />
          <meshStandardMaterial color="#d4af37" transparent opacity={0.3} />
        </mesh>
        <mesh position={[-0.77, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[1.06, 0.06, 0.06]} />
          <meshStandardMaterial color="#d4af37" transparent opacity={0.3} />
        </mesh>
        <mesh position={[0.77, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[1.06, 0.06, 0.06]} />
          <meshStandardMaterial color="#d4af37" transparent opacity={0.3} />
        </mesh>
        {/* Canvas fill */}
        <mesh position={[0, 0.5, -0.02]}>
          <planeGeometry args={[1.5, 0.95]} />
          <meshStandardMaterial color="#0f1729" transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  );
}

function BrushStroke({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={ref} position={position}>
        <cylinderGeometry args={[0.015, 0.005, 1.2, 6]} />
        <meshStandardMaterial color="#d4af37" transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

function Particles({ count = 40 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 8;
      p[i * 3 + 1] = (Math.random() - 0.5) * 6;
      p[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return p;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#d4af37" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += state.pointer.x * 0.01;
    groupRef.current.rotation.x += state.pointer.y * 0.005;
  });

  return (
    <group ref={groupRef}>
      <FloatingFrame position={[0, 0, 0]} rotation={[0.1, 0.2, 0]} scale={1.2} />
      <FloatingFrame position={[-2, 0.5, -1]} rotation={[0, -0.3, 0.1]} scale={0.7} />
      <FloatingFrame position={[2.2, -0.3, -0.5]} rotation={[0.1, 0.4, -0.05]} scale={0.6} />
      <BrushStroke position={[-1.5, -1, 0.5]} />
      <BrushStroke position={[1.8, 1, -0.3]} />
      <Particles />
    </group>
  );
}

export default function PosterScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 4]} intensity={0.4} color="#d4af37" />
      <pointLight position={[-3, -2, 2]} intensity={0.2} color="#e8d5a3" />
      <Scene />
    </Canvas>
  );
}
