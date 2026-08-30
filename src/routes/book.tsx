import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, Display, Lede, GoldRule } from "@/components/ui/section";
import { TidyCalEmbed } from "@/components/TidyCalEmbed";
import { BOOKING_TYPES, bookingUrl, type BookingType } from "@/config/booking";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Session — Ava Coaching Academy" },
      {
        name: "description",
        content:
          "Reserve a session with Ava through the official booking calendar. Choose the session that fits where you are — coaching, clarity, expression, meditation, or transition support.",
      },
      { property: "og:title", content: "Book a Session — Ava Coaching Academy" },
      {
        property: "og:description",
        content:
          "Choose your session and reserve a time directly in Ava's calendar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  const [selected, setSelected] = useState<BookingType>(BOOKING_TYPES[0]!);

  return (
    <>
      {/* HERO */}
      <Section tone="sand" className="text-center">
        <Eyebrow>Booking</Eyebrow>
        <Display as="h1">Begin your next chapter</Display>
        <Lede className="mx-auto">
          Choose the session that fits where you are right now, then reserve
          your time directly in Ava's calendar below. Every session is a calm,
          confidential conversation — no preparation needed.
        </Lede>
      </Section>

      {/* BOOKING TYPES */}
      <Section className="pt-0 md:pt-0">
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {BOOKING_TYPES.map((t) => {
            const active = t.id === selected.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelected(t)}
                aria-pressed={active}
                className={cn(
                  "p-8 text-left transition-colors duration-300",
                  active ? "bg-charcoal text-ivory" : "bg-card hover:bg-secondary",
                )}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-2xl">{t.title}</h2>
                  <span
                    className={cn(
                      "shrink-0 text-[0.62rem] tracking-[0.22em] uppercase",
                      active ? "text-gold" : "text-muted-foreground",
                    )}
                  >
                    {t.price === "free" ? "Free" : t.duration}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    active ? "text-ivory/85" : "text-muted-foreground",
                  )}
                >
                  {t.description}
                </p>
                <p
                  className={cn(
                    "mt-5 text-[0.64rem] tracking-[0.24em] uppercase",
                    active ? "text-gold" : "text-muted-foreground",
                  )}
                >
                  {active ? "Selected — choose a time below" : t.ctaLabel}
                </p>
              </button>
            );
          })}
        </div>

        {/* EMBED */}
        <div className="mt-16">
          <GoldRule className="mx-auto mb-12 max-w-xs" />
          <h2 className="text-center text-3xl sm:text-4xl">
            Reserve your time — <span className="italic">{selected.title}</span>
          </h2>
          <div className="mx-auto mt-10 max-w-3xl">
            <TidyCalEmbed type={selected} />
          </div>
        </div>
      </Section>

      {/* AFTER BOOKING */}
      <Section tone="dawn">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            [
              "Before",
              "Once your time is confirmed you will receive a calendar invitation by email, with everything you need to join.",
            ],
            [
              "During",
              "A one-to-one conversation with Ava — structured enough to be useful, spacious enough to breathe.",
            ],
            [
              "After",
              "You leave with clarity, notes to reflect on, and one honest next step. No pressure to continue.",
            ],
          ].map(([k, v]) => (
            <div key={k} className="surface-card p-8">
              <p className="eyebrow">{k}</p>
              <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          Sessions are personal development and holistic support. They are not
          medical treatment, psychotherapy, or a substitute for professional
          care. If the calendar above does not load, you can{" "}
          <a
            href={bookingUrl(selected)}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-gold"
          >
            book directly on TidyCal
          </a>
          .
        </p>
      </Section>
    </>
  );
}
