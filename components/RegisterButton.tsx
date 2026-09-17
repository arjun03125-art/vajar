import Link from "next/link";
import type { EventData } from "@/data/events";

interface RegisterButtonProps {
  event: EventData;
  className?: string;
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function RegisterButton({
  event,
  className = "",
  variant = "solid",
  size = "md",
}: RegisterButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-[0.65rem]",
    md: "px-8 py-3.5 text-[0.75rem]",
    lg: "px-10 py-4 text-[0.8rem]",
  };

  const base = variant === "solid" ? "btn-gold" : "btn-gold-outline";

  return (
    <Link
      href={event.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizeClasses[size]} ${className}`}
      aria-label={`Register for ${event.title}`}
    >
      Register Now
    </Link>
  );
}
