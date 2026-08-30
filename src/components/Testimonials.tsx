import { Section, Eyebrow, Display, Lede } from "@/components/ui/section";

const TESTIMONIALS = [
  {
    quote:
      "I cannot say enough about Ava. She is truly gifted — the truth, with no fluff.",
    name: "Verified client",
    meta: "Spiritual guidance session",
  },
  {
    quote:
      "A wonderful reading. She connected with me so fast — accurate, straightforward, and she felt what I was feeling. You can feel her energy. Thank you, Ava!",
    name: "T.",
    meta: "United States",
  },
  {
    quote: "Very good, efficient, and to the point. I will return.",
    name: "A.",
    meta: "Returning client",
  },
  {
    quote:
      "A straightforward reading. I have been to her several times and she has been very consistent.",
    name: "P.",
    meta: "Singapore",
  },
  {
    quote: "Very good. She was informative. Thank you.",
    name: "A.",
    meta: "First session",
  },
  {
    quote: "A beautiful reading. I may call again.",
    name: "T.",
    meta: "United States",
  },
  {
    quote: "An intense reading. Thank you.",
    name: "M.",
    meta: "United States",
  },
  {
    quote: "A great reading. Thank you.",
    name: "R.",
    meta: "United States",
  },
  {
    quote: "Thank you very much, Ava.",
    name: "M.",
    meta: "United States",
  },
];

export function Testimonials() {
  return (
    <Section tone="sand" id="testimonials">
      <div className="max-w-3xl">
        <Eyebrow>Kind words</Eyebrow>
        <Display>What clients say</Display>
        <Lede>
          Reflections from people Ava has read for and coached over the years —
          shared here with names shortened for privacy.
        </Lede>
      </div>

      <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <li key={i}>
            <figure className="surface-card flex h-full flex-col p-8">
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
                <p className="text-[0.68rem] tracking-[0.2em] uppercase">
                  {t.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{t.meta}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
