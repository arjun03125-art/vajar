import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { siteConfig } from "@/data/events";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VAJRA — Unleash. Express. Impact. | Social Welfare Board",
    template: "%s | VAJRA — Social Welfare Board",
  },
  description: siteConfig.description,
  keywords: [
    "VAJRA",
    "Social Welfare Board",
    "NSS CMRCET",
    "Poster Making",
    "Essay Writing",
    "Quiz Competition",
    "Dance Competition",
    "CMRCET Events",
    "College Festival",
  ],
  authors: [{ name: "Social Welfare Board under NSS Unit, CMRCET" }],
  openGraph: {
    title: "VAJRA — Unleash. Express. Impact.",
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: "VAJRA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cinzel.variable} ${outfit.variable}`}>
      <body className="bg-navy-950 text-slate-100 font-sans antialiased min-h-screen flex flex-col selection:bg-gold-500/30 selection:text-gold-200">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
