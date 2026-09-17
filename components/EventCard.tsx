"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { EventData } from "@/data/events";

interface EventCardProps {
  event: EventData;
  index?: number;
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((y - 0.5) * -8);
    setRotateY((x - 0.5) * 8);
    setGlowX(x * 100);
    setGlowY(y * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <Link href={`/${event.slug}`} className="block">
          <article
            className="event-card p-6 sm:p-8 relative overflow-hidden group"
            style={{
              background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(212,175,55,0.04) 0%, transparent 50%), linear-gradient(160deg, rgba(15,23,41,0.9), rgba(10,14,26,0.95))`,
            }}
          >
            {/* Number */}
            <span className="block font-serif text-5xl sm:text-6xl font-bold text-gold-500/10 leading-none mb-4 select-none group-hover:text-gold-500/20 transition-colors duration-400">
              {event.number}
            </span>

            {/* Title */}
            <h3 className="font-serif text-xl sm:text-2xl tracking-[0.08em] text-ivory uppercase mb-3">
              {event.title}
            </h3>

            {/* Gold divider */}
            <div className="w-10 h-[1.5px] bg-gold-500 mb-4 transition-all duration-400 group-hover:w-16" />

            {/* Tagline */}
            <p className="text-gold-400 text-[0.72rem] tracking-[0.08em] uppercase font-medium mb-4">
              {event.tagline}
            </p>

            {/* Description */}
            <p className="text-ivory-dim text-[0.82rem] leading-relaxed mb-6 line-clamp-3">
              {event.description}
            </p>

            {/* Meta */}
            <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-gold-500/10">
              <MetaItem label="Date" value={event.date.replace(" 2026", "")} />
              <MetaItem label="Type" value={event.participation} />
              <MetaItem label="Fee" value={event.fee} />
            </div>

            {/* Explore link */}
            <div className="flex items-center gap-2 text-gold-400 text-[0.72rem] tracking-[0.1em] uppercase font-medium group-hover:gap-3 transition-all duration-300">
              Explore Event
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </article>
        </Link>
      </div>
    </motion.div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block text-[0.5rem] tracking-[0.12em] uppercase text-warm-gray mb-0.5">{label}</span>
      <span className="block text-[0.72rem] tracking-[0.04em] text-ivory font-medium">{value}</span>
    </div>
  );
}
