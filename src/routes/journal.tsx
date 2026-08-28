import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, BookButton, GoldRule } from "@/components/ui/section";
import writingImg from "@/assets/writing.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Ava Journal — Coming Soon" },
      {
        name: "description",
        content:
          "The Ava Journal: writing on freedom, knowledge, relationships, creativity, movement, meditation, spirituality, transformation, and the art of becoming. Coming soon.",
      },
      { property: "og:title", content: "The Ava Journal — Coming Soon" },
      {
        property: "og:description",
        content:
          "Writing on freedom, knowledge, creativity, meditation, spirituality and the art of becoming.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: Journal,
});

const CATEGORIES = [
  "Freedom",
  "Knowledge",
  "Relationships",
  "Creativity",
  "Meditation",
  "Movement",
  "Spirituality",
  "Science & Spirituality",
  "Reinvention",
  "Meaning",
  "Joy",
];

function Journal() {
  return (
    <>
      <Section tone="dawn">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Eyebrow>The Journal</Eyebrow>
            <h1 className="mt-6 text-[2.6rem] leading-[1.06] sm:text-6xl">The Ava Journal</h1>
            <div className="rule-gold my-8 max-w-xs" aria-hidden />
            <p className="max-w-xl text-base leading-[1.9] text-foreground/85 sm:text-lg">
              A space for writing on freedom, knowledge, relationships, creativity, movement,
              meditation, spirituality, transformation, and the art of becoming.
            </p>
            <p className="mt-12 font-display text-4xl tracking-[0.22em] uppercase text-gold sm:text-5xl">
              Coming soon
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-sm">
            <div aria-hidden className="absolute -inset-3 border border-gold/50" />
            <img
              src={writingImg}
              alt="An open journal and pen in soft window light"
              width={1200}
              height={1500}
              loading="lazy"
              className="relative w-full object-cover"
            />
          </figure>
        </div>
      </Section>

      <Section>
        <Eyebrow>What will live here</Eyebrow>
        <ul className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <li key={c} className="bg-card px-7 py-8 font-display text-2xl">
              {c}
            </li>
          ))}
        </ul>

        <GoldRule className="mx-auto mt-20 max-w-md" />
        <div className="text-center">
          <p className="mx-auto max-w-xl text-base leading-[1.9] text-foreground/85">
            Until the first essays are published, the conversation continues in session.
          </p>
          <div className="mt-8 flex justify-center">
            <BookButton tone="solid" />
          </div>
        </div>
      </Section>
    </>
  );
}
