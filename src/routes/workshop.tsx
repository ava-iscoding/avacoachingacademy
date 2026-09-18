import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, Display, Lede, GoldRule } from "@/components/ui/section";
import { TIDYCAL_FALLBACK_URL } from "@/config/booking";
import heroImg from "@/assets/workshop-hero.jpg";
import suppliesImg from "@/assets/workshop-supplies.jpg";
import artWallImg from "@/assets/workshop-art.jpg";
import soundbathMeditationImg from "@/assets/workshops/soundbath-meditation-beach.jpg";
import soundbathBowlsImg from "@/assets/workshops/soundbath-crystal-bowls.jpg";

export const Route = createFileRoute("/workshop")({
  head: () => ({
    meta: [
      { title: "Children's Art Workshop — Ava Coaching Academy" },
      {
        name: "description",
        content:
          "A healing, hope-filled art workshop for children led by Ava Naeini — spiritual coach, teacher and healer. Creativity, communication, ethics, faith and self-love.",
      },
      { property: "og:title", content: "Workshops — Ava Coaching Academy" },
      {
        property: "og:description",
        content:
          "Empowering children through creativity, communication, ethics, faith-based teaching and self-love. A gentle space for healing and hope.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/workshop" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/workshop" }],
  }),
  component: Workshop,
});

const EXPERIENCES = [
  {
    n: "01",
    t: "Creative Expression",
    d: "Painting, drawing, clay and collage give children a safe language for feelings they may not yet have words for.",
  },
  {
    n: "02",
    t: "Communication",
    d: "Gentle conversation around the art table helps children name emotions, listen to one another, and speak with confidence and kindness.",
  },
  {
    n: "03",
    t: "Ethics & Character",
    d: "Stories and shared projects nurture honesty, empathy, responsibility and care for others — values practised, not lectured.",
  },
  {
    n: "04",
    t: "Faith & Gratitude",
    d: "Simple, age-appropriate moments of gratitude and wonder connect children to something greater than themselves and to the goodness in their own hearts.",
  },
  {
    n: "05",
    t: "Self-Love & Confidence",
    d: "Every child's creation is honoured. Children learn that their voice matters, their feelings are welcome, and they are worthy exactly as they are.",
  },
  {
    n: "06",
    t: "Stillness & Calm",
    d: "Quiet beginnings and gentle breathing help children settle, focus, and experience the peace that lives inside them.",
  },
];

const SUPPLIES_PROVIDED = [
  "Watercolour paints & wooden brushes",
  "Washable tempera & poster paints",
  "Oil pastels, crayons & coloured pencils",
  "Thick watercolour paper & kraft craft paper",
  "Small stretched canvases",
  "Air-dry modelling clay",
  "Safety scissors, glue sticks & tape",
  "Collage materials — fabric, beads, stars & natural treasures",
  "Aprons, smocks & water jars",
];

const SUPPLIES_TO_BRING = [
  "Comfortable clothes that can get happily messy",
  "A water bottle",
  "A smock or old shirt, if preferred",
  "An open heart — everything else is provided",
];

function Workshop() {
  return (
    <>
      <Section tone="dawn" className="py-16 md:py-20">
        <div className="max-w-3xl">
          <Eyebrow>Workshops with Ava Naeini</Eyebrow>
          <Display as="h1">Creative spaces for healing, hope and stillness</Display>
          <Lede>
            Explore art-led experiences for children and restorative soundbath
            meditation workshops, each guided with care, faith and intention.
          </Lede>
        </div>

        <nav aria-label="Workshop categories" className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
          <a
            href="#children-workshops"
            className="bg-card p-7 transition-colors hover:bg-secondary"
          >
            <span className="eyebrow">01</span>
            <span className="mt-3 block font-display text-2xl">Children’s Workshops</span>
          </a>
          <a
            href="#soundbath-workshops"
            className="bg-card p-7 transition-colors hover:bg-secondary"
          >
            <span className="eyebrow">02</span>
            <span className="mt-3 block font-display text-2xl">Soundbath Meditation Workshops</span>
          </a>
        </nav>
      </Section>

      {/* HERO */}
      <section id="children-workshops" className="relative isolate scroll-mt-32 overflow-hidden">
        <img
          src={heroImg}
          alt="A child's hands painting a bright watercolour garden with jars of colourful paint"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-ivory/72" />
        <div aria-hidden className="veil absolute inset-0 opacity-40" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 md:py-36">
          <div className="max-w-3xl rise">
            <Eyebrow>Children’s Workshops · With Ava Naeini</Eyebrow>

            <h1 className="mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl md:text-7xl">
              Healing and hope,
              <span className="block italic">one brushstroke</span>
              at a time
            </h1>

            <div className="rule-gold my-9 max-w-sm" aria-hidden />

            <p className="max-w-xl text-base leading-[1.95] text-muted-foreground sm:text-lg">
              A gentle, joyful art workshop where children paint, create, and
              discover the strength and beauty already living inside them.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://tidycal.com/coachava2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xs bg-charcoal px-8 py-4 text-[0.7rem] tracking-[0.26em] text-ivory uppercase transition-colors hover:bg-charcoal/85"
              >
                Enroll Your Child
              </a>
              <a
                href="https://tidycal.com/coachava2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xs border border-charcoal/40 px-8 py-4 text-[0.7rem] tracking-[0.26em] uppercase transition-colors hover:bg-charcoal hover:text-ivory"
              >
                Ask a Question First
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ART */}
      <Section tone="dawn">
        <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <Eyebrow>Why art?</Eyebrow>
            <Display>Children speak in colour before they speak in words</Display>

            <Lede>
              When a child is hurting, confused, or simply growing, art gives
              those feelings somewhere gentle to go. A painted sun, a family
              drawing, a lump of clay shaped by small determined hands — each
              one is a step toward understanding, release, and hope.
            </Lede>

            <p className="mt-6 text-base leading-[1.95] text-muted-foreground">
              In this workshop, creativity is never about talent or a perfect
              picture. It is about expression, healing, and joy. Every child is
              met exactly where they are, and every creation is honoured.
            </p>

            <p className="mt-8 font-display text-2xl italic">
              When a child creates, a child heals.
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-md">
            <div aria-hidden className="absolute -inset-3 border border-gold/40" />
            <img
              src={artWallImg}
              alt="A warm gallery wall of cheerful children's paintings — suns, rainbows, hearts and families"
              width={1600}
              height={912}
              loading="lazy"
              className="relative w-full object-cover shadow-[var(--shadow-lift)]"
            />
          </figure>
        </div>
      </Section>

      {/* WHAT CHILDREN EXPERIENCE */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Inside the workshop</Eyebrow>
          <Display>What children experience</Display>
          <Lede>
            Each session weaves creativity together with communication, ethics,
            faith, and self-love — so children leave with more than artwork.
            They leave with tools for life.
          </Lede>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e) => (
            <article key={e.n} className="flex flex-col bg-card p-9">
              <span className="font-display text-2xl text-gold">{e.n}</span>
              <h3 className="mt-4 text-2xl leading-snug">{e.t}</h3>
              <p className="mt-4 flex-1 text-sm leading-[1.9] text-foreground/85">{e.d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* MEET AVA */}
      <Section tone="sand">
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <figure className="relative mx-auto w-full max-w-xs">
            <div aria-hidden className="absolute -inset-3 border border-gold/40" />
            <img
              src="/images/ava-portrait.jpg"
              alt="Ava Naeini, spiritual coach, teacher and healer"
              width={1280}
              height={1920}
              loading="lazy"
              className="relative w-full object-cover shadow-[var(--shadow-lift)]"
            />
            <figcaption className="mt-5 text-center text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
              Ava Naeini
            </figcaption>
          </figure>

          <div>
            <Eyebrow>Your child's guide</Eyebrow>
            <Display className="text-3xl sm:text-4xl md:text-5xl">
              Meet Ava Naeini
            </Display>

            <div className="mt-6 space-y-5 text-base leading-[1.95] text-muted-foreground">
              <p>
                Ava is a spiritual coach, teacher, and healer whose work centres
                on communication, ethics, and faith-based teaching. She believes
                every child carries a light — and that creativity is one of the
                most beautiful ways to help a child see it.
              </p>
              <p>
                Her sessions are calm, warm, and joyful. Children are never
                rushed, judged, or compared. They are listened to, encouraged,
                and gently guided to express what is inside them — and to
                discover self-love along the way.
              </p>
              <p>
                Parents are welcome to reach out with any questions before
                enrolling. Trust matters, especially when it comes to children.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SUPPLIES */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <img
            src={suppliesImg}
            alt="A flat lay of children's art supplies — watercolours, brushes, pastels, clay, paper and canvases"
            width={1200}
            height={1104}
            loading="lazy"
            className="w-full object-cover"
          />

          <div>
            <Eyebrow>Art materials</Eyebrow>
            <Display className="text-3xl sm:text-4xl md:text-5xl">
              Everything a young artist needs
            </Display>

            <p className="mt-6 text-base leading-[1.95] text-muted-foreground">
              All materials are provided and chosen especially for children —
              safe, washable where possible, and beautiful to work with. Each
              child brings home their own artwork.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              {SUPPLIES_PROVIDED.map((s) => (
                <li
                  key={s}
                  className="flex items-baseline gap-3 border-b border-border/70 pb-3"
                >
                  <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {s}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[0.68rem] tracking-[0.24em] uppercase">
              For your child to bring
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {SUPPLIES_TO_BRING.map((s) => (
                <li key={s} className="flex items-baseline gap-3">
                  <span aria-hidden className="text-gold">·</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FOR PARENTS */}
      <Section tone="charcoal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-ivory/50">For parents</p>

          <h2 className="mt-6 text-4xl leading-[1.1] text-ivory sm:text-5xl">
            A safe, gentle space
            <span className="block italic text-gold">built on trust</span>
          </h2>

          <p className="mt-8 text-base leading-[1.95] text-ivory/85">
            Small groups. Kind guidance. Age-appropriate themes. Children are
            encouraged, never pressured; celebrated, never compared. Sessions
            nurture emotional expression, character, and confidence through
            creativity, gratitude, and faith-centred teaching.
          </p>

          <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-ivory/70">
            This workshop supports children's emotional expression and wellbeing
            through art and gentle guidance. It is a creative and personal
            development space — not psychotherapy, medical treatment, or a
            substitute for professional care.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://tidycal.com/coachava2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xs bg-gold px-8 py-4 text-[0.7rem] tracking-[0.26em] text-charcoal uppercase transition-colors hover:bg-gold/85"
            >
              Reserve a Place
            </a>
            <a
              href="https://tidycal.com/coachava2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xs border border-ivory/40 px-8 py-4 text-[0.7rem] tracking-[0.26em] uppercase transition-colors hover:bg-ivory hover:text-charcoal"
            >
              Speak With Ava
            </a>
          </div>

          <GoldRule className="mx-auto mt-16 max-w-sm" />
        </div>
      </Section>

      {/* SOUNDBATH MEDITATION WORKSHOPS */}
      <Section id="soundbath-workshops" tone="dawn" className="scroll-mt-32">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Eyebrow>Soundbath Meditation Workshops</Eyebrow>
            <Display>Rest in sound. Return to stillness.</Display>
            <Lede>
              A gentle, restorative workshop shaped by crystal singing bowls,
              meditation and the natural rhythm of breath. Ava creates a calm
              space to slow down, listen inward and reconnect with a quieter
              sense of presence.
            </Lede>
            <p className="mt-6 text-base leading-[1.95] text-muted-foreground">
              Soundbath meditation workshops can be arranged for individuals,
              private groups and community gatherings. Begin with a consultation
              to discuss the setting, group and intention for your workshop.
            </p>
            <a
              href={TIDYCAL_FALLBACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center rounded-xs bg-charcoal px-8 py-4 text-[0.7rem] tracking-[0.26em] text-ivory uppercase transition-colors hover:bg-charcoal/85"
            >
              Book a Consultation
            </a>
          </div>

          <figure className="relative">
            <div aria-hidden className="absolute -inset-3 border border-gold/40" />
            <img
              src={soundbathBowlsImg}
              alt="Ava leading a soundbath meditation with colourful crystal singing bowls beside the ocean"
              width={1800}
              height={1200}
              loading="lazy"
              className="relative aspect-[3/2] w-full object-cover shadow-[var(--shadow-lift)]"
            />
          </figure>
        </div>

        <figure className="mt-16 grid gap-6 md:grid-cols-[1.35fr_0.65fr] md:items-end">
          <img
            src={soundbathMeditationImg}
            alt="Ava standing peacefully in meditation on a quiet beach"
            width={1800}
            height={1200}
            loading="lazy"
            className="aspect-[3/2] w-full object-cover"
          />
          <figcaption className="border-l border-gold/50 py-2 pl-6 font-display text-2xl leading-relaxed italic">
            A peaceful pause for reflection, presence and renewal.
          </figcaption>
        </figure>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Soundbath meditation is offered as a wellbeing and reflective practice.
          It is not medical treatment or a substitute for professional care.
        </p>
      </Section>
    </>
  );
}
