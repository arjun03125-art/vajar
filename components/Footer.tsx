import Link from "next/link";
import { Globe, Share2, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/events";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/#competitions" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Rules", href: "/#rules" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const actionLinks = [
  { label: "Location", href: siteConfig.locationMapUrl, icon: MapPin },
  { label: "Contact", href: `tel:${siteConfig.coordinatorPhone.replace(/\s+/g, "")}`, icon: Phone },
  { label: "Website", href: "https://cmrcet.ac.in", icon: Globe },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-gold-500/20 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="font-serif text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent mb-2">
          VAJRA
        </h2>
        <p className="font-serif text-sm tracking-[0.3em] uppercase text-gold-400 mb-6">
          UNLEASH. EXPRESS. IMPACT.
        </p>

        <div className="max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mb-6" />

        <p className="text-xs tracking-wider uppercase text-slate-400 mb-1">
          Social Welfare Board • Under NSS Unit
        </p>
        <p className="text-xs text-slate-500 mb-8">
          CMR College of Engineering & Technology
        </p>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider text-slate-300 hover:text-gold-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {actionLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold-500/20 bg-navy-900/60 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-500/50 transition-all"
              aria-label={item.label}
            >
              <item.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="text-xs text-slate-500 border-t border-gold-500/10 pt-8">
          © 2026 VAJRA — Social Welfare Board, NSS CMRCET. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
