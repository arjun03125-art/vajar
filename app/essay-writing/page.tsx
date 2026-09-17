import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import EventHero from "@/components/EventHero";
import RegisterButton from "@/components/RegisterButton";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import ParticleField from "@/components/ParticleField";
import { eventsMap, eventsList } from "@/data/events";
import { PenTool, CheckCircle2, Award, FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Essay Writing Competition — VAJRA",
  description: "Craft persuasive narratives on social transformation. Essay writing competition organized by SWB & NSS Unit, CMRCET.",
};

export default function EssayWritingPage() {
  const event = eventsMap["essay-writing"];
  if (!event) return notFound();

  const otherEvents = eventsList.filter((e) => e.slug !== event.slug);

  return (
    <div className="relative min-h-screen bg-navy-950">
      {/* Hero Header with 3D Canvas */}
      <EventHero event={event} />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        {/* Themes Section */}
        {event.themes && (
          <section>
            <SectionDivider title="Essay Topics" />
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-white mb-2">Prompts & Themes</h2>
              <p className="text-slate-400 text-sm">Essays must address one of the following core topics:</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {event.themes.map((theme, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="glass-card p-6 rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-colors flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400 shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-gold-300 mb-1">{theme}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        In-depth critical analysis with well-substantiated arguments and constructive solutions.
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
          <SectionDivider title="Submission Guidelines" />
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-white mb-2">Rules & Regulations</h2>
            <p className="text-slate-400 text-sm">Ensure your essay meets all word count and formatting rules:</p>
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
            <SectionDivider title="Evaluation Standards" />
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-white mb-2">Judging Criteria</h2>
              <p className="text-slate-400 text-sm">Literary works will be evaluated on:</p>
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
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">Let Your Voice Be Heard</h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
              Register now for the Essay Writing Competition at VAJRA.
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
