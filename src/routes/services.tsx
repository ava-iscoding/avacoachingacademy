import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow, Display, Lede, BookButton, GoldRule } from "@/components/ui/section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ava Coaching Academy" },
      {
        name: "description",
        content:
          "Clarity, freedom coaching, knowledge and perspective, creative expression, movement, meditation, and transition support — sessions for people moving through change.",
      },
      { property: "og:title", content: "Services — Ava Coaching Academy" },
      {
        property: "og:description",
        content:
          "Seven ways to work together: clarity, freedom, knowledge, creative expression, movement, meditation, and reinvention.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const SERVICES = [
  {
    n: "01",
    title: "Clarity & Life Direction",
    body: "For people navigating major decisions, changes, uncertainty, relationships, career questions, relocation, reinvention, or the beginning of a new stage of life.",
    cta: "Book a Clarity Session",
  },
  {
    n: "02",
    title: "Freedom Coaching",
    body: "Focused on recognising the patterns, beliefs, emotional attachments, environments, and habits that may be limiting your sense of freedom.",
    cta: "Book Freedom Coaching",
  },
  {
    n: "03",
    title: "Knowledge & Perspective Coaching",
    body: "For thoughtful, curious people who want a deeper understanding of themselves, their decisions, relationships, ambitions, and direction.",
    cta: "Book a Session",
  },
  {
    n: "04",
    title: "Creative Expression & Journaling",
    body: "Writing, reflection, creativity, and expression used as tools for understanding emotion and creating movement where things feel stuck.",
    cta: "Explore Through Writing",
  },
  {
    n: "05",
    title: "Movement & Emotional Release",
    body: "Movement, breath, physical expression, and creativity explored as ways of reconnecting with the body and with feeling.",
    cta: "Book a Movement Session",
  },
  {
    n: "06",
    title: "Meditation & Inner Focus",
    body: "Stillness, concentration, presence, observation, and reflection — practices that steadily strengthen mental focus.",
    cta: "Book a Meditation Session",
  },
  {
    n: "07",
    title: "Transition & Reinvention",
    body: "For clients moving through career, relationship, identity, location, lifestyle, or other major personal transitions.",
    cta: "Begin Your Next Chapter",
  },
];

function Services() {
  return (
    <>
      <Section tone="dawn">
        <Eyebrow>Services</Eyebrow>
        <Display as="h1">Ways we can work together</Display>
        <Lede className="text-foreground/85">
          Each session is a private conversation shaped around where you actually are — not a
          fixed programme. If you are unsure which fits, begin with an introductory
          conversation.
        </Lede>
        <div className="mt-10 flex flex-wrap gap-4">
          <BookButton tone="solid" />
          <BookButton tone="outline" label="Book an Introductory Call" />
        </div>
      </Section>

      <Section>
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.n} className="flex flex-col bg-card p-9">
              <span className="font-display text-2xl text-gold">{s.n}</span>
              <h2 className="mt-4 text-2xl leading-snug">{s.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-[1.9] text-foreground/85">{s.body}</p>
              <Link
                to="/book"
                className="mt-8 inline-flex items-center justify-center rounded-xs border border-charcoal/40 px-6 py-3.5 text-[0.66rem] tracking-[0.22em] uppercase transition-colors hover:bg-charcoal hover:text-ivory"
              >
                {s.cta}
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-foreground/70">
          Coaching and holistic guidance are offered here as personal development and
          reflection. They are not psychotherapy, medical treatment, diagnosis, or a substitute
          for medical, psychiatric, legal, or emergency services.
        </p>
      </Section>

      <Section tone="sand" className="text-center">
        <Eyebrow>Not sure where to begin?</Eyebrow>
        <Display>Start with a brief conversation</Display>
        <p className="mx-auto mt-6 max-w-xl text-base leading-[1.9] text-foreground/85">
          A short introductory call is enough to understand what you are moving through and
          whether this is the right space for you.
        </p>
        <div className="mt-10 flex justify-center">
          <BookButton tone="gold" label="Book an Introductory Call" />
        </div>
        <GoldRule className="mx-auto mt-16 max-w-sm" />
      </Section>
    </>
  );
}
