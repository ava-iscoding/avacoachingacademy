import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, Display, Lede, GoldRule } from "@/components/ui/section";
import trainImg from "@/assets/train-ascension.jpg";
import stillnessImg from "@/assets/stillness.jpg";
import hero from "@/assets/hero-garden.jpg";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "Philosophy — Ava Coaching Academy" },
      {
        name: "description",
        content:
          "Life never stops moving. The philosophy behind Ava Coaching Academy: freedom, knowledge, expression, stillness, science and spirituality, joy, and conscious ascension.",
      },
      { property: "og:title", content: "Philosophy — Ava Coaching Academy" },
      {
        property: "og:description",
        content:
          "Freedom, knowledge, expression and stillness — the ideas that shape the work of Ava Coaching Academy.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/philosophy" },
    ],
    links: [{ rel: "canonical", href: "/philosophy" }],
  }),
  component: Philosophy,
});

const KNOWLEDGE_SOURCES = [
  "Life experience",
  "Mathematics",
  "Science",
  "Medicine",
  "Technology",
  "Psychology",
  "Spirituality",
  "Relationships",
  "Nature",
  "Self-observation",
];

const STAGES = [
  ["Experience", "What life has already given you."],
  ["Awareness", "Seeing it clearly, without flinching."],
  ["Release", "Letting what is finished be finished."],
  ["Knowledge", "Understanding the pattern beneath it."],
  ["Choice", "Deciding, rather than repeating."],
  ["Growth", "Becoming someone slightly new."],
  ["New World", "A life that fits who you now are."],
];

function Philosophy() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt=""
          aria-hidden
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-ivory/80" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 md:py-32">
          <Eyebrow>Philosophy</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-[2.6rem] leading-[1.06] sm:text-6xl">
            Life never stops <span className="italic">moving</span>
          </h1>
          <div className="rule-gold my-9 max-w-sm" aria-hidden />
          <p className="max-w-2xl text-base leading-[1.9] text-foreground/85 sm:text-lg">
            Human beings move continuously through relationships, identities, environments,
            careers, emotions, beliefs, stages of awareness, and entirely different chapters
            of life.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-[1.9] text-foreground/85 sm:text-lg">
            Growth is not always about becoming someone completely different. Sometimes growth
            means understanding what we have experienced, releasing what no longer belongs to
            us, and becoming conscious enough to choose what comes next. Ava Coaching Academy
            exists to support that process.
          </p>
        </div>
      </section>

      {/* PORTRAIT + FREEDOM & KNOWLEDGE */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <figure className="relative mx-auto w-full max-w-md">
            <div aria-hidden className="absolute -inset-3 border border-gold/50" />
            <img
              src="/images/ava-philosophy.jpg"
              alt="Ava, founder of Ava Coaching Academy"
              width={1100}
              height={1652}
              loading="lazy"
              className="relative w-full object-cover shadow-[var(--shadow-soft)]"
            />
          </figure>

          <div>
            <Eyebrow>Freedom &amp; Knowledge</Eyebrow>
            <Display>Two halves of the same practice</Display>
            <p className="mt-6 text-base leading-[1.9] text-foreground/85">
              Freedom is not simply escaping responsibilities. Freedom is developing enough
              awareness to recognise what belongs to you, what does not, what you have already
              outgrown, and what direction feels aligned with your life.
            </p>
            <p className="mt-5 text-base leading-[1.9] text-foreground/85">
              Knowledge helps us see patterns. Freedom allows us to choose differently.
            </p>
            <blockquote className="mt-9 border-l-2 border-gold pl-6 font-display text-2xl leading-snug italic sm:text-3xl">
              Freedom is not the absence of responsibility. It is the ability to live
              consciously.
            </blockquote>
            <p className="mt-9 text-sm leading-[1.9] text-foreground/80">
              Knowledge arrives from many directions — and becomes transformative only when it
              changes the way we live.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {KNOWLEDGE_SOURCES.map((k) => (
                <li
                  key={k}
                  className="border border-border bg-card px-4 py-2 text-xs tracking-[0.12em] uppercase"
                >
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* EXPRESSION & STILLNESS */}
      <Section tone="sand">
        <div className="max-w-3xl">
          <Eyebrow>Two complementary paths</Eyebrow>
          <Display>Expression releases. Stillness strengthens.</Display>
          <Lede className="text-foreground/85">
            They are not opposing forces, and neither is ever finished. Both are lifelong
            practices.
          </Lede>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <article className="surface-card p-10">
            <p className="eyebrow">Expression</p>
            <h3 className="mt-4 text-3xl">Let the inner life move</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/85">
              {["Writing", "Journaling", "Conversation", "Dance", "Movement", "Creativity", "Art", "Emotional expression", "Voice"].map(
                (i) => (
                  <li key={i} className="border-b border-border/80 pb-2">
                    {i}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-7 text-base leading-[1.9] text-foreground/85">
              Sometimes an emotion does not need to be analysed forever. Sometimes it simply
              needs expression.
            </p>
          </article>

          <article className="surface-card p-10">
            <p className="eyebrow">Stillness</p>
            <h3 className="mt-4 text-3xl">Strengthen the observer</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/85">
              {["Meditation", "Silence", "Prayer", "Reflection", "Focus", "Observation", "Breath", "Presence"].map(
                (i) => (
                  <li key={i} className="border-b border-border/80 pb-2">
                    {i}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-7 text-base leading-[1.9] text-foreground/85">
              Through stillness we strengthen the ability to observe the mind rather than react
              automatically to every thought that passes through it.
            </p>
          </article>
        </div>
      </Section>

      {/* SCIENCE & SPIRITUALITY */}
      <Section>
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <Eyebrow>Science &amp; Spirituality</Eyebrow>
            <Display>Curiosity does not require you to choose a side</Display>
            <p className="mt-6 text-base leading-[1.9] text-foreground/85">
              Science and spirituality do not necessarily need to compete. Ava Coaching Academy
              welcomes curiosity across these different worlds, and treats compassion as the
              first value rather than the last.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-foreground/70">
              This work is personal growth, reflection, perspective, creativity, spirituality
              and coaching. It is not medical treatment, psychotherapy, diagnosis, or
              mental-health treatment.
            </p>
          </div>
          <dl className="grid gap-px self-start overflow-hidden border border-border bg-border sm:grid-cols-2">
            {[
              ["Science", "explores mechanisms."],
              ["Medicine", "explores the body."],
              ["Psychology", "explores behaviour and emotion."],
              ["Mathematics", "explores structure."],
              ["Technology", "explores systems."],
              ["Spirituality", "explores meaning."],
              ["Faith", "connects us with something larger."],
              ["Nature", "shows us the pattern of all of it."],
            ].map(([k, v]) => (
              <div key={k} className="bg-card p-6">
                <dt className="text-[0.68rem] tracking-[0.18em] uppercase">{k}</dt>
                <dd className="mt-2 text-sm text-foreground/80">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* TIME NEVER STOPS */}
      <Section tone="charcoal">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-ivory/70">Time</p>
          <h2 className="mt-6 text-4xl leading-[1.08] sm:text-6xl">Time never stops</h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-[1.9] text-ivory/85">
            People sometimes remain emotionally attached to an earlier identity, relationship,
            disappointment, environment, career, fear, or version of themselves — long after
            life has already moved forward.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.9] text-ivory/85">
            The purpose is not to erase the past. The purpose is to understand it, integrate
            what it taught us, and continue moving.
          </p>
          <p className="mt-12 font-display text-3xl leading-snug italic text-gold sm:text-4xl">
            Your life is still happening. You can participate in it again.
          </p>
        </div>
      </Section>

      {/* TRAIN / ASCENSION */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The train &amp; ascension</Eyebrow>
          <Display>One stage carries us into the next</Display>
          <Lede className="text-foreground/85">
            Human beings connect almost like the wagons of a train. Some people travel beside us
            temporarily. Some remain longer. Some relationships teach us. Some environments
            develop us. Then life asks us to move into another stage.
          </Lede>
        </div>

        <img
          src={trainImg}
          alt="Abstract gold linework of connected train carriages crossing a soft landscape"
          width={1600}
          height={912}
          loading="lazy"
          className="mt-12 w-full object-cover"
        />

        <ol className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map(([t, d], i) => (
            <li key={t} className="bg-card p-7">
              <span className="font-display text-2xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{d}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-3xl text-base leading-[1.9] text-foreground/85">
          Ascension, in this philosophy, means becoming increasingly conscious as we move
          through life. It does not mean escaping reality. It means moving through reality with
          greater understanding.
        </p>
      </Section>

      {/* JOY */}
      <Section tone="dawn">
        <div className="max-w-3xl">
          <Eyebrow>Joy</Eyebrow>
          <Display>Joy is also knowledge</Display>
          <Lede className="text-foreground/85">
            Joy carries information about what brings us alive. Sometimes it reveals direction
            before logic does.
          </Lede>
        </div>
        <ul className="mt-12 grid gap-x-12 gap-y-5 sm:grid-cols-2">
          {[
            "What energises you?",
            "What makes you curious?",
            "Where do you feel most yourself?",
            "What environments expand you?",
            "What makes time disappear?",
            "What work or creativity naturally draws you in?",
          ].map((q) => (
            <li key={q} className="border-b border-border pb-4 font-display text-xl sm:text-2xl">
              {q}
            </li>
          ))}
        </ul>
      </Section>

      {/* NATURE & TRANSFORMATION */}
      <Section tone="sand">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Nature &amp; transformation</Eyebrow>
            <Display>We also have seasons</Display>
            <p className="mt-6 text-base leading-[1.9] text-foreground/85">
              There are seasons of action. Seasons of stillness. Seasons of rebuilding. And
              there are long periods where almost nothing appears to be happening externally
              while a great deal is being transformed within.
            </p>
            <p className="mt-5 text-base leading-[1.9] text-foreground/85">
              A dormant garden is not a failed garden. It is a garden in a different part of
              its cycle.
            </p>
          </div>
          <img
            src={stillnessImg}
            alt="Still water with gentle ripples at dawn"
            width={1600}
            height={900}
            loading="lazy"
            className="h-72 w-full object-cover lg:h-96"
          />
        </div>

        <GoldRule className="mx-auto mt-20 max-w-md" />
        <div className="text-center">
          <p className="font-display text-3xl">Where are you in your own cycle?</p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://tidycal.com/coachava2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xs border border-charcoal bg-charcoal px-6 py-3 text-[0.64rem] tracking-[0.24em] uppercase text-ivory transition-colors hover:bg-ivory hover:text-charcoal"
            >
              Book a Session
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
