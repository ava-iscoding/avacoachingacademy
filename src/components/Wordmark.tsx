import { Link } from "@tanstack/react-router";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Ava Coaching Academy — home">
      <span
        aria-hidden
        className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 transition-colors group-hover:border-gold"
      >
        <span className="font-display text-lg leading-none text-gold">A</span>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-xl tracking-[0.18em] uppercase">Ava</span>
        {!compact && (
          <span className="block text-[0.6rem] tracking-[0.32em] text-muted-foreground uppercase">
            Coaching Academy
          </span>
        )}
      </span>
    </Link>
  );
}
