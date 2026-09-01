import { Section, Eyebrow, Display, Lede } from "@/components/ui/section";

const TESTIMONIALS = [
  {
    quote:
      "Very good, efficient and to the point. I left with exactly what I needed and I will return. Ava was informative and generous with her time — a truly worthwhile 1-1 coaching session.",
    name: "Tanya R.",
    meta: "1-1 coaching client",
  },
  {
    quote:
      "I cannot say enough about Ava. She is definitely gifted. In our 1-1 session she gave me the truth with no fluff, but held it with warmth. I left with a sense of peace I had not felt in months.",
    name: "Elena M.",
    meta: "1-1 coaching client",
  },
  {
    quote:
      "Straightforward and consistent. I have worked with Ava a few times now through her 1-1 coaching and she is always focused on what I actually need. Each session builds on the last.",
    name: "Priya S.",
    meta: "Returning 1-1 coaching client",
  },
  {
    quote:
      "A beautiful 1-1 coaching session. Ava connected with me so fast — you can feel her energy and presence even through the screen. Accurate, straightforward, and deeply encouraging. I will definitely return.",
    name: "Tessa W.",
    meta: "1-1 coaching client",
  },
  {
    quote:
      "An intense and useful 1-1 session. Ava goes straight to the heart of what matters and helps you hold it with kindness. Exactly the kind of coaching I needed.",
    name: "Margaret D.",
    meta: "1-1 coaching client",
  },
];

function TestimonialCard({
  t,
}: {
  t: (typeof TESTIMONIALS)[number];
}) {
  return (
    <figure className="surface-card flex h-full w-80 shrink-0 flex-col p-8 sm:w-[26rem]">
      <span
        aria-hidden
        className="font-display text-4xl leading-none text-gold"
      >
        &ldquo;
      </span>
      <blockquote className="mt-5 flex-1 text-[0.95rem] leading-[1.85] text-foreground/90">
        {t.quote}
      </blockquote>
      <figcaption className="mt-8 border-t border-border/70 pt-5">
        <p className="text-[0.7rem] font-medium tracking-[0.18em] uppercase">
          {t.name}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{t.meta}</p>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <Section tone="sand" id="testimonials" className="overflow-hidden px-0 sm:px-0">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <Eyebrow>Kind words</Eyebrow>
          <Display>What clients say</Display>
          <Lede>
            Reflections from people Ava has coached — shared here with names
            changed for privacy.
          </Lede>
        </div>
      </div>

      <div
        className="group relative mt-14 w-full"
        aria-label="Client testimonials"
      >
        <div className="marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </Section>
  );
}

