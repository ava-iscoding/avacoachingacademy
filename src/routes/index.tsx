import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, Display, Lede, LinkButton, GoldRule } from "@/components/ui/section";
import heroGarden from "@/assets/hero-garden.jpg";
import trainImg from "@/assets/train-ascension.jpg";
import writingImg from "@/assets/writing.jpg";
import movementImg from "@/assets/movement.jpg";
import stillnessImg from "@/assets/stillness.jpg";
import knowledgeImg from "@/assets/knowledge.jpg";
import { PianoPlayer } from "@/components/PianoPlayer";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ava Coaching Academy — Come Back Into Alignment With Your Life" },
      {
        name: "description",
        content:
          "Freedom & Knowledge coaching for people who think deeply and feel deeply. Move through transition consciously — with clarity, expression, stillness, and compassion.",
      },
      {
        property: "og:title",
        content:
          "Ava Coaching Academy — Come Back Into Alignment With Your Life",
      },
      {
        property: "og:description",
        content:
          "A calm, intelligent space for transformation, freedom, knowledge and growth. Book a session with Ava.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const DEEP_TRAITS = [
  "Highly reflective",
  "Intelligent",
  "Emotionally sensitive",
  "Spiritually curious",
  "Creative",
  "Ambitious",
  "Going through transition",
  "Searching for greater meaning",
  "Feeling emotionally blocked",
  "Rebuilding after adversity",
  "Changing careers or identities",
  "Questioning the direction of life",
  "Trying to reconnect with joy",
  "Looking for genuine human support",
];

const FREEDOMS = [
  "From repetitive thoughts",
  "From emotional attachment",
  "From other people's expectations",
  "From fear",
  "To create",
  "To change",
  "To learn",
  "To move",
  "To express yourself",
  "To choose your next chapter",
  "To enjoy your own life",
];

const CARRIAGES = [
  { n: "01", t: "Experience", d: "What life has already given you." },
  { n: "02", t: "Awareness", d: "Seeing it clearly, without flinching." },
  { n: "03", t: "Release", d: "Letting what is finished be finished." },
  { n: "04", t: "Knowledge", d: "Understanding the pattern beneath it." },
  { n: "05", t: "Choice", d: "Deciding, rather than repeating." },
  { n: "06", t: "Growth", d: "Becoming someone slightly new." },
  { n: "07", t: "New World", d: "A life that fits who you now are." },
];

function Home() {
  return (
    <>
      <PianoPlayer />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroGarden}
          alt="Morning sunlight through grasses in a quiet walled garden"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-ivory/72" />
        <div aria-hidden className="veil absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-24 sm:px-10 md:py-36 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rise">
            <Eyebrow>Freedom &amp; Knowledge Coaching</Eyebrow>

            <h1 className="mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl md:text-7xl">
              Come back into
              <span className="block italic">alignment</span>
              with your life
            </h1>

            <div className="rule-gold my-9 max-w-sm" aria-hidden />

            <p className="max-w-xl text-base leading-[1.95] text-muted-foreground sm:text-lg">
              Life keeps moving. You are allowed to change with it — to outgrow
              environments, beliefs, identities, relationships, habits, and
              versions of yourself that no longer represent who you are
              becoming.
            </p>

            <p className="mt-5 max-w-xl text-base leading-[1.95] text-muted-foreground sm:text-lg">
              Coaching is not about someone telling you who to become. It is
              about creating enough clarity, emotional freedom, knowledge,
              awareness, and inner strength for you to hear yourself again.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <LinkButton to="/philosophy" tone="solid">
                Begin Your Journey
              </LinkButton>

              <a
                href="https://tidycal.com/coachava2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xs border border-charcoal/40 px-7 py-3 text-[0.64rem] tracking-[0.24em] uppercase transition-colors hover:bg-charcoal hover:text-ivory"
              >
                Book a Session
              </a>
            </div>
          </div>

          <figure className="rise relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-3 border border-gold/40"
            />

            <img
              src="/images/ava-portrait.jpg"
              alt="Ava, founder of Ava Coaching Academy"
              width={1280}
              height={1920}
              className="relative w-full object-cover shadow-[var(--shadow-lift)]"
            />

            <figcaption className="mt-5 text-center text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
              Ava — Freedom &amp; Knowledge Coach
            </figcaption>
          </figure>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* TIME NEVER STOPS */}
      <Section tone="sand">
        <div className="grid gap-14 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow>The Nature of Life</Eyebrow>
            <Display>Time never stops</Display>
          </div>

          <div>
            <p className="text-base leading-[1.95] text-muted-foreground">
              Time moves whether we are ready or not. People often remain
              emotionally attached to an old identity, a relationship, a
              disappointment, a fear, a career, a family dynamic, or a former
              version of themselves — while life has already moved forward
              without them.
            </p>

            <p className="mt-5 text-base leading-[1.95] text-muted-foreground">
              The goal is not to run from the past. The goal is to understand
              it, integrate what it taught us, and continue moving.
            </p>

            <p className="mt-8 font-display text-2xl italic">
              Your life is still happening. You can participate in it again.
            </p>
          </div>
        </div>
      </Section>

      {/* FOR PEOPLE WHO THINK DEEPLY */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Who this is for</Eyebrow>
          <Display>For people who think deeply and feel deeply</Display>

          <Lede>
            Ava Coaching Academy is particularly suited to those who notice
            everything, question everything, and carry a quiet sense that
            something wants to change. Nothing about you is broken. You may
            simply be in transition.
          </Lede>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEEP_TRAITS.map((t) => (
            <li
              key={t}
              className="flex items-baseline gap-3 border-b border-border/70 pb-4 text-sm"
            >
              <span
                aria-hidden
                className="h-1 w-1 shrink-0 rounded-full bg-gold"
              />
              {t}
            </li>
          ))}
        </ul>
      </Section>

      {/* FREEDOM */}
      <Section tone="charcoal">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow text-ivory/50">Freedom</p>

            <h2 className="mt-5 text-4xl leading-[1.12] sm:text-5xl">
              Freedom is not the absence of responsibility.
              <span className="mt-3 block italic text-gold">
                It is the ability to live consciously.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-[1.95] text-ivory/85">
              Freedom rarely arrives as a dramatic escape. More often it
              arrives as a quiet widening — a little more room between what
              happens and how you respond.
            </p>
          </div>

          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {FREEDOMS.map((f) => (
              <li
                key={f}
                className="border-b border-ivory/15 pb-3 text-sm text-ivory/80"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* KNOWLEDGE + SCIENCE & SPIRITUALITY */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <img
            src={knowledgeImg}
            alt="A sunlit study with books and a brass astronomical instrument"
            width={1200}
            height={1500}
            loading="lazy"
            className="w-full object-cover"
          />

          <div>
            <Eyebrow>Knowledge</Eyebrow>
            <Display>Knowledge alone does not create freedom</Display>

            <Lede>
              A person can understand many things intellectually and still
              remain emotionally stuck. Real transformation usually asks for
              more than one language at once.
            </Lede>

            <p className="mt-6 font-display text-2xl leading-relaxed italic">
              Knowledge + awareness + emotional release + expression + movement
              + silence + spiritual connection + action.
            </p>

            <dl className="mt-10 space-y-4 text-sm">
              {[
                ["Mathematics", "teaches structure."],
                ["Science", "teaches observation."],
                ["Medicine", "teaches the complexity of the body."],
                ["Technology", "teaches systems."],
                [
                  "Chinese medicine",
                  "teaches balance, pattern, energy and nature.",
                ],
                ["Spirituality", "asks what all of it means."],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-wrap items-baseline gap-2 border-b border-border/70 pb-3"
                >
                  <dt className="tracking-[0.16em] uppercase text-[0.68rem]">
                    {k}
                  </dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <GoldRule className="my-20" />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Science &amp; Spirituality</Eyebrow>

            <Display className="text-3xl sm:text-4xl md:text-5xl">
              Curiosity does not require you to choose a side
            </Display>
          </div>

          <div className="space-y-5 text-base leading-[1.95] text-muted-foreground">
            <p>
              Science can help us understand mechanisms. Spirituality can help
              us explore meaning. Medicine can study the body. Psychology can
              study behaviour and emotion. Philosophy can explore existence.
              Faith can connect us with something greater than ourselves.
            </p>

            <p>
              A person does not have to choose only one way of understanding
              life. This is a place where curiosity is welcomed — and where
              compassion is the first value, not the last.
            </p>

            <p className="text-xs leading-relaxed">
              Coaching here is personal development and holistic support. It is
              not medical treatment or psychotherapy.
            </p>
          </div>
        </div>
      </Section>

      {/* EXPRESSION & STILLNESS */}
      <Section tone="sand">
        <div className="max-w-3xl">
          <Eyebrow>Two complementary paths</Eyebrow>
          <Display>Expression and stillness</Display>
          <Lede>One releases. One strengthens. Both are lifelong journeys.</Lede>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <article className="surface-card p-10 hover:-translate-y-1">
            <p className="eyebrow">Expression</p>
            <h3 className="mt-4 text-3xl">Let it move</h3>

            <p className="mt-5 text-sm leading-[1.95] text-muted-foreground">
              Through writing, journaling, creativity, dance, movement,
              conversation, emotional release, art and voice, we allow emotions,
              thoughts, memories and energy to move.
            </p>

            <p className="mt-5 text-sm leading-[1.95] text-muted-foreground">
              Sometimes we need to speak. Sometimes to write. Sometimes to move.
              Sometimes to cry. Sometimes to create. Sometimes to change our
              environment. Sometimes we simply need permission to become someone
              new.
            </p>
          </article>

          <article className="surface-card p-10 hover:-translate-y-1">
            <p className="eyebrow">Stillness</p>
            <h3 className="mt-4 text-3xl">Let it settle</h3>

            <p className="mt-5 text-sm leading-[1.95] text-muted-foreground">
              Through meditation, silence, focus, observation, prayer,
              reflection, breath and presence, we strengthen the mind.
            </p>

            <p className="mt-5 text-sm leading-[1.95] text-muted-foreground">
              We learn not to react to every thought. We learn to observe
              ourselves. We learn concentration. We reconnect with meaning, and
              become more conscious about which thoughts deserve our energy.
            </p>
          </article>
        </div>

        <img
          src={stillnessImg}
          alt="Still water with gentle ripples at dawn"
          width={1600}
          height={900}
          loading="lazy"
          className="mt-14 h-56 w-full object-cover sm:h-72"
        />
      </Section>

      {/* TRAIN / ASCENSION */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The philosophy</Eyebrow>
          <Display>The train, and what we call ascension</Display>

          <Lede>
            Human beings connect almost like the wagons of a train — each
            person, stage, lesson and relationship linked to the next as we move
            forward. Some travel beside us temporarily. Some remain longer. Some
            environments develop us. Eventually life asks us to move into
            another stage.
          </Lede>

          <p className="mt-6 max-w-2xl text-base leading-[1.95] text-muted-foreground">
            Ascension, in this philosophy, does not mean escaping life. It means
            becoming increasingly conscious while moving through it.
          </p>
        </div>

        <div className="mt-14 overflow-hidden">
          <img
            src={trainImg}
            alt="Abstract gold linework of connected train carriages crossing a soft landscape"
            width={1600}
            height={912}
            loading="lazy"
            className="drift w-full object-cover"
          />
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CARRIAGES.map((c) => (
            <li key={c.n} className="bg-card p-7">
              <span className="font-display text-2xl text-gold">{c.n}</span>
              <h3 className="mt-3 text-xl">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.d}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ADVERSITY */}
      <Section tone="dawn">
        <div className="grid gap-14 md:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Adversity</Eyebrow>
            <Display>After something difficult</Display>

            <Lede>
              Loss. Relationship change. Career change. Betrayal. Isolation.
              Disappointment. Relocation. Financial transition. Identity change.
              Starting over. Being misunderstood. Many people arrive here after
              one of these.
            </Lede>
          </div>

          <div className="grid gap-px self-start overflow-hidden border border-border bg-border sm:grid-cols-2">
            {[
              ["What can be understood?", "Meaning before movement."],
              ["What can be released?", "Not everything needs carrying."],
              ["What can be rebuilt?", "Slowly, and on your terms."],
              ["What becomes possible now?", "Often more than expected."],
            ].map(([q, a]) => (
              <div key={q} className="bg-card p-7">
                <h3 className="font-display text-xl leading-snug">{q}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* JOY */}
      <Section tone="charcoal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-ivory/50">Joy</p>

          <h2 className="mt-6 text-4xl leading-[1.1] sm:text-6xl">
            <span className="italic text-gold">Joy is also knowledge</span>
          </h2>

          <p className="mt-8 text-base leading-[1.95] text-ivory/85">
            Transformation is not meant to be endless emotional work. Life is
            also meant to be experienced. Sometimes joy is simply telling you
            where you belong.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-x-12 gap-y-5 sm:grid-cols-2">
          {[
            "What energises you?",
            "What makes you feel alive?",
            "What makes time disappear?",
            "Where do you naturally become curious?",
            "What environments expand you?",
            "What people allow you to become more yourself?",
          ].map((q) => (
            <li
              key={q}
              className="border-b border-ivory/15 pb-4 font-display text-xl text-ivory"
            >
              {q}
            </li>
          ))}
        </ul>
      </Section>

      {/* MOVEMENT + WRITING */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <article>
            <img
              src={movementImg}
              alt="A dancer's silhouette moving through sunlight in an arched room"
              width={1200}
              height={1500}
              loading="lazy"
              className="w-full object-cover"
            />

            <Eyebrow>Movement</Eyebrow>

            <Display className="text-3xl sm:text-4xl">
              The mind is not separate from the body
            </Display>

            <Lede className="text-base">
              Sometimes a thought cannot be solved by thinking harder. Walking,
              stretching, dancing, breathing, or simply changing environment
              can change how an emotion is experienced. Movement is offered here
              as one tool for exploration and release.
            </Lede>
          </article>

          <article>
            <img
              src={writingImg}
              alt="An open journal and pen in soft window light"
              width={1200}
              height={1500}
              loading="lazy"
              className="w-full object-cover"
            />

            <Eyebrow>Writing</Eyebrow>

            <Display className="text-3xl sm:text-4xl">
              Writing makes thought visible
            </Display>

            <Lede className="text-base">
              Once something is visible, we can examine it. We can question it.
              We can see where it came from — and decide whether it still
              belongs in our life. Journaling is a core tool within the Ava
              Coaching Academy approach.
            </Lede>
          </article>
        </div>
      </Section>

      {/* CLOSING CTA */}
      <Section tone="sand" className="text-center">
        <Eyebrow>One step</Eyebrow>

        <h2 className="mt-6 text-4xl leading-[1.1] sm:text-6xl">
          Your life is still moving.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-[1.95] text-muted-foreground sm:text-lg">
          You do not need to understand your entire future before taking another
          step. Sometimes the next stage begins with one conversation.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://tidycal.com/coachava2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xs bg-charcoal px-7 py-3 text-[0.64rem] tracking-[0.24em] text-ivory uppercase transition-opacity hover:opacity-80"
          >
            Book a Session
          </a>
        </div>

        <GoldRule className="mx-auto mt-20 max-w-md" />

        <p className="font-display text-2xl tracking-[0.2em] uppercase sm:text-3xl">
          Ava Coaching Academy
        </p>

        <p className="mt-4 text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
          Freedom • Knowledge • Expression • Stillness • Growth
        </p>
      </Section>
    </>
  );
}
