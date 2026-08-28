import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  Eyebrow,
  Display,
  Lede,
  BookButton,
  GoldRule,
} from "@/components/ui/section";
import knowledgeImg from "@/assets/knowledge.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ava — Freedom & Knowledge Coach" },
      {
        name: "description",
        content:
          "Ava's path has crossed mathematics, technology, Chinese medicine, coaching, spirituality, writing and creativity — all of it about understanding people, patterns and change.",
      },
      {
        property: "og:title",
        content: "About Ava — Freedom & Knowledge Coach",
      },
      {
        property: "og:description",
        content:
          "The story of someone whose curiosity has crossed disciplines — and what that brings to coaching.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section tone="dawn">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <figure className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-3 border border-gold/50"
            />
            <img
              src="/images/ava-portrait.jpg"
              alt="Ava, founder of Ava Coaching Academy"
              width={1280}
              height={1920}
              className="relative w-full object-cover shadow-[var(--shadow-soft)]"
            />
          </figure>

          <div>
            <Eyebrow>About</Eyebrow>
            <Display as="h1">A curiosity that crossed disciplines</Display>
            <Lede className="text-foreground/85">
              Freedom &amp; Knowledge Coach — with a path that has moved
              through mathematics, computer science, technology, medicine,
              Chinese medicine, coaching, spirituality, healing, writing,
              creativity, and entrepreneurship.
            </Lede>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 md:grid-cols-2">
          <div className="space-y-6 text-base leading-[1.95] text-foreground/85">
            <p>
              I have always been drawn to knowledge — to mathematics, science,
              medicine, technology, psychology, spirituality, and the workings
              of the human mind. For a long time these looked like separate
              interests. They are not.
            </p>

            <p>
              Each of them is a way of studying the same thing: systems,
              patterns, people, growth, and transformation. Mathematics taught
              me structure. Science taught me to observe before concluding.
              Medicine showed me how intricate a body is. Technology taught me
              how systems behave. Chinese medicine taught me balance, pattern,
              energy, and interconnectedness. Spirituality kept asking what any
              of it means.
            </p>

            <p>
              I have spent years working and succeeding inside highly technical
              environments as a woman — which taught me a great deal about
              ambition, professional identity, resilience, confidence,
              intellectual independence, and the quiet cost of holding yourself
              to a very high standard.
            </p>

            <p>
              It also taught me the limit of knowledge on its own. A person can
              understand something perfectly and still be unable to move. Real
              change usually asks for more than one language at once: awareness,
              emotional release, expression, movement, silence, spiritual
              connection — and then action.
            </p>

            <p>
              That is the work I do now. Not telling anyone who to become.
              Creating enough clarity and freedom that a person can hear
              themselves again.
            </p>
          </div>

          <div>
            <img
              src={knowledgeImg}
              alt="A sunlit study with books and a brass astronomical instrument"
              width={1200}
              height={1500}
              loading="lazy"
              className="w-full object-cover"
            />

            <dl className="mt-10 space-y-4 text-sm">
              {[
                [
                  "Inner",
                  "Meditation, reflection, emotional awareness, faith.",
                ],
                [
                  "Outer",
                  "Career, environment, relationships, direction, action.",
                ],
                [
                  "Method",
                  "Conversation, writing, movement, music, art, stillness, curiosity.",
                ],
                ["Value", "Faith is everything."],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border pb-3">
                  <dt className="text-[0.68rem] tracking-[0.2em] uppercase">
                    {k}
                  </dt>
                  <dd className="mt-1.5 text-foreground/80">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <GoldRule className="mx-auto mt-20 max-w-md" />

        <div className="text-center">
          <p className="font-display text-3xl">
            Come as you are, mid-sentence.
          </p>

          <div className="mt-8 flex justify-center">
            <BookButton tone="solid" />
          </div>
        </div>
      </Section>
    </>
  );
}
