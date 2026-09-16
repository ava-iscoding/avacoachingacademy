import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal px-6 py-20 text-ivory sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.16em] uppercase">Ava Coaching Academy</p>
            <p className="mt-4 text-xs tracking-[0.28em] text-ivory/90 uppercase">
              Freedom • Knowledge • Expression • Stillness • Growth
            </p>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-ivory/85">
              A quiet space for people in transition — to think clearly, feel honestly,
              and continue becoming.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.62rem] tracking-[0.3em] text-ivory/70 uppercase">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Ava" },
                { to: "/philosophy", label: "Philosophy" },
                 /* { to: "/services", label: "Services" }, */
                { to: "/workshop", label: "Children's Art Workshop" },
                { to: "/journal", label: "Journal" },
               /* { href: "https://tidycal.com/coachava2", label: "Book a Session" }, */
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-opacity hover:opacity-60">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.62rem] tracking-[0.3em] text-ivory/70 uppercase">Begin</p>
            <p className="mt-5 text-sm leading-relaxed text-ivory/85">
              Not sure where to begin? Start with a brief introductory conversation.
            </p>
    
            <a
              href="https://tidycal.com/coachava2"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xs border border-ivory/40 px-6 py-3 text-[0.64rem] tracking-[0.24em] uppercase transition-colors hover:bg-ivory hover:text-charcoal"
            >
              Book a Session
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/15 pt-8 text-xs leading-relaxed text-ivory/70">
          <p>
            Coaching and holistic guidance are not a substitute for medical, psychiatric,
            legal, or emergency services.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} Ava Coaching Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
