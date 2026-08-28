import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/philosophy", label: "Philosophy" },
   /* { to: "/services", label: "Services" }, */
  { to: "/journal", label: "Journal" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <p className="bg-charcoal px-4 py-2 text-center text-[0.58rem] tracking-[0.3em] text-ivory/90 uppercase sm:text-[0.62rem]">
        In the name of God, the Compassionate, the Merciful
      </p>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Wordmark />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-[0.66rem] tracking-[0.24em] uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="rounded-xs bg-charcoal px-6 py-3 text-[0.66rem] tracking-[0.24em] text-ivory uppercase transition-colors hover:bg-charcoal/85"
          >
            Book a Session
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
       /*   <Link
            to="/book"
            className="rounded-xs bg-charcoal px-4 py-2.5 text-[0.6rem] tracking-[0.2em] text-ivory uppercase"
          >
            Book 
          </Link> */
          <a
  href="https://tidycal.com/coachava2"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xs bg-charcoal px-6 py-3 text-[0.66rem] tracking-[0.24em] text-ivory uppercase transition-colors hover:bg-charcoal/85"
>
  Book a Session
</a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-border"
          >
            <span
              className={cn("h-px w-5 bg-foreground transition-transform", open && "translate-y-[3px] rotate-45")}
            />
            <span
              className={cn("h-px w-5 bg-foreground transition-transform", open && "-translate-y-[3px] -rotate-45")}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 pb-8 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/70 py-4 font-display text-2xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
         /* <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-xs bg-charcoal py-4 text-center text-[0.68rem] tracking-[0.26em] text-ivory uppercase"
          >
            Book a Session
          </Link> */
          <a
            href="https://tidycal.com/coachava2"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xs bg-charcoal px-6 py-3 text-[0.66rem] tracking-[0.24em] text-ivory uppercase transition-colors hover:bg-charcoal/85"
          >
          Book a Session
        </a>
        </nav>
      )}
    </header>
  );
}
