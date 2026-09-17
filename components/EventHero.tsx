"use client";

import React from "react";
import SceneWrapper from "@/components/3d/SceneWrapper";
import RegisterButton from "@/components/RegisterButton";
import ScrollReveal from "@/components/ScrollReveal";
import type { EventData } from "@/data/events";
import { Calendar, Clock, MapPin, Users, Award } from "lucide-react";

interface EventHeroProps {
  event: EventData;
}

export default function EventHero({ event }: EventHeroProps) {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Background 3D Visual */}
      <div className="absolute inset-0 z-0">
        <SceneWrapper sceneType={event.sceneType} className="opacity-75" />
      </div>

      {/* Dark & Gold Overlay Gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gold opacity-30 z-[1] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/40 bg-navy-900/80 backdrop-blur-md text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <span>Event #{event.number}</span>
            <span className="text-gold-500/40">•</span>
            <span>{event.participation}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
            <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              {event.title}
            </span>
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-gold-300/90 max-w-2xl mx-auto mb-6">
            "{event.tagline}"
          </p>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            {event.description}
          </p>
        </ScrollReveal>

        {/* Info Grid Pills */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
            <div className="bg-navy-900/70 border border-gold-500/20 backdrop-blur-md rounded-xl p-3 text-center">
              <Calendar className="w-5 h-5 text-gold-400 mx-auto mb-1" />
              <div className="text-xs text-slate-400 uppercase tracking-wider">Date</div>
              <div className="text-sm font-semibold text-white">{event.date}</div>
            </div>
            <div className="bg-navy-900/70 border border-gold-500/20 backdrop-blur-md rounded-xl p-3 text-center">
              <Clock className="w-5 h-5 text-gold-400 mx-auto mb-1" />
              <div className="text-xs text-slate-400 uppercase tracking-wider">Time</div>
              <div className="text-sm font-semibold text-white">{event.time}</div>
            </div>
            <div className="bg-navy-900/70 border border-gold-500/20 backdrop-blur-md rounded-xl p-3 text-center">
              <MapPin className="w-5 h-5 text-gold-400 mx-auto mb-1" />
              <div className="text-xs text-slate-400 uppercase tracking-wider">Venue</div>
              <div className="text-sm font-semibold text-white truncate">{event.venue}</div>
            </div>
            <div className="bg-navy-900/70 border border-gold-500/20 backdrop-blur-md rounded-xl p-3 text-center">
              <Users className="w-5 h-5 text-gold-400 mx-auto mb-1" />
              <div className="text-xs text-slate-400 uppercase tracking-wider">Format</div>
              <div className="text-sm font-semibold text-white">{event.participation}</div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <RegisterButton event={event} size="lg" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
