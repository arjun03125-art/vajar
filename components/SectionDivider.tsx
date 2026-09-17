interface SectionDividerProps {
  title?: string;
  className?: string;
}

export default function SectionDivider({ title, className = "" }: SectionDividerProps) {
  return (
    <div className={`relative flex items-center justify-center my-12 ${className}`}>
      <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      {title && (
        <span className="px-4 text-xs font-serif tracking-[0.3em] uppercase text-gold-400 bg-navy-950 border border-gold-500/20 py-1 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.15)]">
          {title}
        </span>
      )}
      <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
    </div>
  );
}
