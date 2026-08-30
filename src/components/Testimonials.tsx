import { Section, Eyebrow, Display, Lede } from "@/components/ui/section";

const TESTIMONIALS = [
  {
    quote:
      "I cannot say enough about Ava. She is truly gifted — the truth, with no fluff.",
    name: "Elena M.",
    meta: "Spiritual guidance session",
  },
  {
    quote:
      "A wonderful session. She connected with me so fast — accurate, straightforward, and she felt what I was feeling. You can feel her energy. Thank you, Ava!",
    name: "Tanya R.",
    meta: "United States",
  },
  {
    quote: "Very good, efficient, and to the point. I will return.",
    name: "Anita K.",
    meta: "Returning client",
  },
  {
    quote:
      "A straightforward session. I have been to her several times and she has been very consistent.",
    name: "Priya S.",
    meta: "Singapore",
  },
  {
    quote: "Very good. She was informative. Thank you.",
    name: "Anna L.",
    meta: "First session",
  },
  {
    quote: "A beautiful session. I may call again.",
    name: "Tessa W.",
    meta: "United States",
  },
  {
    quote: "An intense session. Thank you.",
    name: "Margaret D.",
    meta: "United States",
  },
  {
    quote: "A great session. Thank you.",
    name: "Robert H.",
    meta: "United States",
  },
  {
    quote: "Thank you very much, Ava.",
    name: "Michael J.",
    meta: "United States",
  },
];

function TestimonialCard({
  t,
}: {
  t: (typeof TESTIMONIALS)[number];
}) {
  return (
    <figure className="surface-card flex h-full w-80 shrink-0 flex-col p-8 sm:w-96">
      <span
        aria-hidden
        className="font-display text-4xl leading-none text-gold"
      >
        &ldquo;
      </span>
      <blockquote className="mt-4 flex-1 text-sm leading-[1.9]">
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-border/70 pt-4">
        <p className="text-[0.68rem] tracking-[0.2em] uppercase">{t.name}</p>
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
            Reflections from people Ava has coached over the years — shared
            here with names changed for privacy.
          </Lede>
        </div>
      </div>

      <div
        className="group relative mt-14 w-full"
        aria-label="Client testimonials"
      >
        <div className="marquee flex w-max gap-8 group-hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </Section>
  );
}
