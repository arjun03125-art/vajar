"use client";

import { Suspense, lazy, useState, useEffect } from "react";
import type { ComponentType } from "react";

const HomeScene = lazy(() => import("./HomeScene"));
const PosterScene = lazy(() => import("./PosterScene"));
const QuizScene = lazy(() => import("./QuizScene"));
const EssayScene = lazy(() => import("./EssayScene"));
const DanceScene = lazy(() => import("./DanceScene"));

const sceneMap: Record<string, ComponentType> = {
  home: HomeScene,
  poster: PosterScene,
  quiz: QuizScene,
  essay: EssayScene,
  dance: DanceScene,
};

interface SceneWrapperProps {
  scene?: string;
  sceneType?: string;
  className?: string;
}

export default function SceneWrapper({ scene, sceneType, className = "" }: SceneWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const activeSceneKey = sceneType || scene || "home";

  useEffect(() => {
    setMounted(true);

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!mounted || !hasWebGL || reducedMotion) {
    return <CSSFallback className={className} />;
  }

  const SceneComponent = sceneMap[activeSceneKey];
  if (!SceneComponent) return <CSSFallback className={className} />;

  return (
    <div className={`scene-container ${className}`}>
      <Suspense fallback={<CSSFallback className="" />}>
        <SceneComponent />
      </Suspense>
    </div>
  );
}

function CSSFallback({ className }: { className: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-gold-500/[0.03] rounded-full blur-3xl" />
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold-500/20"
          style={{
            left: `${15 + i * 17}%`,
            top: `${25 + (i % 3) * 20}%`,
            animation: `float-gentle ${4 + i * 0.6}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}
