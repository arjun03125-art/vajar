import React from "react";
import Link from "next/link";
import SceneWrapper from "@/components/3d/SceneWrapper";
import EventCard from "@/components/EventCard";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import ParticleField from "@/components/ParticleField";
import { eventsList, siteConfig, generalRules } from "@/data/events";
import {
  Sparkles,
  MapPin,
  Calendar,
  Phone,
  Clock,
  Award,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Heart,
  Users,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-navy-950">
        {/* Interactive 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          <SceneWrapper sceneType="home" className="opacity-80" />
        </div>

        {/* Ambient Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none z-[1]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Organization Badge */}
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/40 bg-navy-900/80 backdrop-blur-md text-gold-400 text-xs sm:text-sm font-medium tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>SOCIAL WELFARE BOARD • NSS UNIT CMRCET</span>
            </div>
          </ScrollReveal>

          {/* Main Title */}
          <ScrollReveal>
            <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-white mb-4">
              <span className="bg-gradient-to-b from-amber-100 via-gold-300 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(212,175,55,0.3)]">
                VAJRA
              </span>
            </h1>
          </ScrollReveal>

          {/* Tagline */}
          <ScrollReveal delay={0.2}>
            <p className="font-serif tracking-[0.4em] sm:tracking-[0.6em] text-lg sm:text-2xl md:text-3xl text-gold-400 uppercase font-semibold mb-6">
              UNLEASH. EXPRESS. IMPACT.
            </p>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
              The flagship student-driven competition initiative. Four major arenas. One stage to create lasting social impact.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href="#competitions"
                className="btn-gold px-8 py-4 text-base font-semibold tracking-wider rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                Explore Competitions
              </a>
              <a
                href="#schedule"
                className="btn-outline px-8 py-4 text-base font-semibold tracking-wider rounded-xl"
              >
                Event Schedule
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          2. QUICK STATS TICKER
          ======================================================== */}
      <section className="relative z-20 border-y border-gold-500/20 bg-navy-900/90 backdrop-blur-lg py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">4 Major</div>
            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">Competitions</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">1 Core</div>
            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">Social Mission</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">CMRCET</div>
            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">Campus Venue</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">E-Certificates</div>
            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">For Participants</div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ABOUT ORGANIZERS SECTION
          ======================================================== */}
      <section id="about" className="relative py-24 px-4 sm:px-6 bg-navy-950">
        <ParticleField className="opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionDivider title="Organizing Body" />

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Social Welfare Board & NSS Unit
            </h2>
            <p className="text-gold-400 text-lg font-serif italic">
              CMR College of Engineering & Technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 rounded-2xl h-full border border-gold-500/20 hover:border-gold-500/50 transition-colors">
                <Heart className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-3">Empowerment</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Fostering student leadership and creative expression to address pressing community and social challenges through active engagement.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 rounded-2xl h-full border border-gold-500/20 hover:border-gold-500/50 transition-colors">
                <Users className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-3">Community Service</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Organized under the National Service Scheme (NSS) unit of CMRCET, driving impactful initiatives across education, health, and welfare.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="glass-card p-8 rounded-2xl h-full border border-gold-500/20 hover:border-gold-500/50 transition-colors">
                <Award className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  VAJRA offers a platform where artistic talent, critical thought, and performance converge to inspire collective change.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. COMPETITIONS GRID SECTION
          ======================================================== */}
      <section id="competitions" className="relative py-24 px-4 sm:px-6 bg-navy-900/60">
        <div className="max-w-6xl mx-auto">
          <SectionDivider title="Arenas of Honor" />

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Featured Competitions
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Select an event to view full details, rules, theme specifications, and complete your registration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eventsList.map((event, idx) => (
              <ScrollReveal key={event.slug} delay={idx * 0.1}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. GENERAL RULES & GUIDELINES
          ======================================================== */}
      <section id="rules" className="relative py-24 px-4 sm:px-6 bg-navy-950">
        <ParticleField className="opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionDivider title="Code of Conduct" />

          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              General Regulations
            </h2>
            <p className="text-slate-300 text-base">
              All participants are required to adhere strictly to the following event guidelines.
            </p>
          </div>

          <div className="space-y-4">
            {generalRules.map((rule, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="glass-card p-5 rounded-xl border border-gold-500/20 flex items-start gap-4 hover:border-gold-500/40 transition-colors">
                  <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-1">
                    {rule}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. SCHEDULE & VENUE SECTION
          ======================================================== */}
      <section id="schedule" className="relative py-24 px-4 sm:px-6 bg-navy-900/60">
        <div className="max-w-4xl mx-auto">
          <SectionDivider title="Timeline" />

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Event Schedule & Location
            </h2>
            <p className="text-slate-300 text-base">
              Plan your arrival at CMR College of Engineering & Technology.
            </p>
          </div>

          {/* Schedule Timeline */}
          <div className="space-y-6 mb-16">
            {eventsList.map((event, idx) => (
              <ScrollReveal key={event.slug} delay={idx * 0.1}>
                <div className="glass-card p-6 rounded-2xl border border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gold-400/40 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-2xl font-bold text-gold-400 w-10 text-center">
                      #{event.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white">{event.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gold-400" />
                          {event.venue}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gold-400" />
                          {event.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/${event.slug}`}
                    className="btn-outline px-4 py-2 text-xs font-semibold rounded-lg text-center"
                  >
                    View Arena Page
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Google Maps Card */}
          <ScrollReveal>
            <div className="glass-card p-8 rounded-2xl border border-gold-500/30 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gold opacity-20 pointer-events-none" />
              <MapPin className="w-12 h-12 text-gold-400 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Venue Location</h3>
              <p className="text-slate-300 text-base mb-6 max-w-lg mx-auto">
                {siteConfig.collegeName}
              </p>
              <a
                href={siteConfig.locationMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          7. CONTACT SECTION
          ======================================================== */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 bg-navy-950">
        <ParticleField className="opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionDivider title="Assistance" />

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Event Coordination
            </h2>
            <p className="text-slate-300 text-base">
              Have questions regarding rules, registration, or schedule? Reach out directly.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <ScrollReveal>
              <div className="glass-card p-8 rounded-2xl border border-gold-500/40 text-center relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-6 text-gold-400">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  Event Coordinator
                </h3>
                <p className="text-xs text-gold-400 uppercase tracking-wider mb-6">
                  Social Welfare Board, NSS CMRCET
                </p>
                <a
                  href={`tel:${siteConfig.coordinatorPhone.replace(/\s+/g, "")}`}
                  className="font-serif text-2xl font-bold text-gold-300 hover:text-gold-200 transition-colors block mb-4"
                >
                  {siteConfig.coordinatorPhone}
                </a>
                <p className="text-xs text-slate-400">
                  Available for registration support & inquiries
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
