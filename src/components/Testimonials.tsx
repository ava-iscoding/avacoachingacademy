import { Section, Eyebrow, Display, Lede } from "@/components/ui/section";

const TESTIMONIALS = [
  {
    quote:
      "I signed up for 101 coaching not knowing what to expect. Ava met me exactly where I was — she understood what I was feeling before I had fully said it, and gave me a perspective I could actually use. You can feel her presence even through the screen.",
    name: "Tanya R.",
    meta: "First coaching client",
  },
  {
    quote:
      "Ava has a rare gift. In one session she helped me see the truth of my situation with no fluff — just clarity, warmth, and real direction. I left with a sense of peace I had not felt in months.",
    name: "Elena M.",
    meta: "Clarity coaching client",
  },
  {
    quote:
      "I have worked with Ava several times through her coaching programme and she has been remarkably consistent — compassionate, honest, and always focused on what I actually need. Each session builds on the last.",
    name: "Priya S.",
    meta: "Returning coaching client",
  },
  {
    quote:
      "A beautiful coaching session. Ava created a safe space for me to be honest about what I want next, and by the end I felt lighter, clearer, and ready to take a real step forward. I will definitely return.",
    name: "Tessa W.",
    meta: "Transition coaching client",
  },
  {
    quote:
      "An intense and deeply useful session. Ava does not waste time — she goes straight to the heart of what matters and helps you hold it with kindness. Exactly the kind of coaching I needed.",
    name: "Margaret D.",
    meta: "Freedom coaching client",
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

