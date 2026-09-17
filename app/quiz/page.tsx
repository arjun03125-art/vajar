import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import EventHero from "@/components/EventHero";
import RegisterButton from "@/components/RegisterButton";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import ParticleField from "@/components/ParticleField";
import { eventsMap, eventsList } from "@/data/events";
import { HelpCircle, CheckCircle2, Award, Brain, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Quiz Competition — VAJRA",
  description: "Test your knowledge on social welfare, current affairs, history & culture. Quiz competition organized by SWB & NSS Unit, CMRCET.",
};

export default function QuizPage() {
  const event = eventsMap["quiz"];
  if (!event) return notFound();

  const otherEvents = eventsList.filter((e) => e.slug !== event.slug);

  return (
    <div className="relative min-h-screen bg-navy-950">
      {/* Hero Header with 3D Canvas */}
      <EventHero event={event} />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        {/* Quiz Coverage Areas */}
        {event.quizAreas && (
          <section>
            <SectionDivider title="Knowledge Domains" />
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-white mb-2">Quiz Coverage Areas</h2>
              <p className="text-slate-400 text-sm">Questions will be drawn from the following key domains:</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {event.quizAreas.map((area, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="glass-card p-6 rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-colors flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400 shrink-0">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-gold-300 mb-1">{area}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Comprehensive evaluation of general awareness, historical milestones, and contemporary issues.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* Rules & Guidelines */}
        <section>
          <SectionDivider title="Rules & Regulations" />
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-white mb-2">Quiz Regulations</h2>
            <p className="text-slate-400 text-sm">Fair play and strict compliance are mandated for all teams:</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {event.rules.map((rule, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="glass-card p-5 rounded-xl border border-gold-500/20 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm leading-relaxed">{rule}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Judging Criteria */}
        {event.judgingCriteria && (
          <section>
            <SectionDivider title="Scoring Matrix" />
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-white mb-2">Evaluation Criteria</h2>
              <p className="text-slate-400 text-sm">Scores will be calculated based on:</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {event.judgingCriteria.map((criterion, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="glass-card p-6 rounded-xl border border-gold-500/20 text-center">
                    <Award className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                    <h3 className="font-serif text-base font-bold text-white mb-1">{criterion}</h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <section className="glass-card p-10 rounded-3xl border border-gold-500/40 text-center relative overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)]">
          <ParticleField className="opacity-40" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">Think You Have What It Takes?</h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
              Register your team for the VAJRA Quiz Competition today.
            </p>
            <RegisterButton event={event} size="lg" />
          </div>
        </section>

        {/* Explore Other Events */}
        <section className="pt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-xl font-bold text-white">Explore Other Competitions</h3>
            <Link href="/#competitions" className="text-xs text-gold-400 hover:text-gold-300 flex items-center gap-1">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherEvents.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="glass-card p-5 rounded-xl border border-gold-500/20 hover:border-gold-500/50 transition-all group"
              >
                <div className="text-xs text-gold-400 font-serif mb-1">Event #{other.number}</div>
                <h4 className="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                  {other.title}
                </h4>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">{other.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
