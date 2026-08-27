import { useEffect, useRef, useState } from "react";
import {
  TIDYCAL_CONFIGURED,
  TIDYCAL_FALLBACK_URL,
  bookingEmbedPath,
  bookingUrl,
  type BookingType,
} from "@/config/booking";

const TIDYCAL_SCRIPT_SRC = "https://tidycal.com/js/embed.js";

/**
 * Loads the official TidyCal embed script exactly once per page load and
 * re-initialises the widget when the selected booking type changes.
 * Portable: no Lovable-specific APIs, works on Netlify / Vercel / Cloudflare.
 */
function loadTidyCalScript(onError: () => void) {
  if (typeof document === "undefined") return;
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${TIDYCAL_SCRIPT_SRC}"]`,
  );
  if (existing) {
    existing.dispatchEvent(new Event("tidycal:reinit"));
    return;
  }
  const script = document.createElement("script");
  script.src = TIDYCAL_SCRIPT_SRC;
  script.async = true;
  script.onerror = onError;
  document.body.appendChild(script);
}

export function TidyCalEmbed({ type }: { type?: BookingType }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const path = bookingEmbedPath(type);

  useEffect(() => {
    if (!TIDYCAL_CONFIGURED) return;
    // Clear any previously rendered widget before re-initialising.
    if (containerRef.current) containerRef.current.innerHTML = "";
    loadTidyCalScript(() => setFailed(true));
    const timer = window.setTimeout(() => {
      if (containerRef.current && containerRef.current.childElementCount === 0) {
        setFailed(true);
      }
    }, 6000);
    return () => window.clearTimeout(timer);
  }, [path]);

  return (
    <div className="w-full">
      {TIDYCAL_CONFIGURED ? (
        <div
          key={path}
          ref={containerRef}
          className="tidycal-embed w-full overflow-hidden rounded-sm bg-card"
          data-path={path}
        />
      ) : (
        <div className="rounded-sm border border-dashed border-border bg-card px-6 py-16 text-center sm:px-12">
          <p className="eyebrow">Scheduler ready</p>
          <h3 className="mt-4 text-3xl">The calendar will appear here</h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            The official TidyCal scheduler is fully wired into this page. Add your
            TidyCal username and booking paths in{" "}
            <code className="rounded-xs bg-secondary px-1.5 py-0.5 text-xs">
              src/config/booking.ts
            </code>{" "}
            and the live calendar — available dates, times, time zones, intake
            questions, and paid or free session types — will render here with no
            further design work.
          </p>
        </div>
      )}

      <div className="mt-8 border-t border-border pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          {failed
            ? "Having trouble viewing the calendar?"
            : "Prefer to open the calendar in a new window?"}
        </p>
        <a
          href={type ? bookingUrl(type) : TIDYCAL_FALLBACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 border-b border-gold pb-1 text-xs tracking-[0.24em] uppercase transition-opacity hover:opacity-70"
        >
          Open the booking calendar
        </a>
      </div>
    </div>
  );
}
