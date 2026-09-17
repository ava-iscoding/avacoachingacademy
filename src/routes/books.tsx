import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, Display, Lede, GoldRule, BookButton } from "@/components/ui/section";
import { BookGrid } from "@/components/BookGrid";
import { CHILDREN_BOOKS, ADULT_BOOKS } from "@/config/books";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books by Ava Naeini — Ava Coaching Academy" },
      {
        name: "description",
        content:
          "Books by Ava Naeini for children and adults — stories, workbooks and reflections on emotion, heritage, creativity, faith and meaning.",
      },
      { property: "og:title", content: "Books by Ava Naeini" },
      {
        property: "og:description",
        content:
          "Children's stories and workbooks, plus reflective writing for adults on faith, ethics and meaning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/books" }],
  }),
  component: BooksPage,
});

function BooksPage() {
  return (
    <>
      <Section tone="dawn">
        <Eyebrow>Books</Eyebrow>
        <Display as="h1">Words that help us grow</Display>
        <Lede>
          Writing by Ava Naeini — stories and workbooks that help children name
          what they feel, and reflective books for adults seeking meaning,
          ethics and faith in everyday life.
        </Lede>
      </Section>

      <Section>
        <Eyebrow>For children</Eyebrow>
        <h2 className="mt-5 text-3xl sm:text-4xl">Stories, workbooks and gentle guides</h2>
        <BookGrid books={CHILDREN_BOOKS} />
      </Section>

      <Section tone="sand">
        <Eyebrow>For adults</Eyebrow>
        <h2 className="mt-5 text-3xl sm:text-4xl">Reflection, faith and meaning</h2>
        <BookGrid books={ADULT_BOOKS} />

        <GoldRule className="mx-auto mt-20 max-w-md" />
        <div className="text-center">
          <p className="mx-auto max-w-xl text-base leading-[1.9] text-foreground/85">
            The conversation continues beyond the page.
          </p>
          <div className="mt-8 flex justify-center">
            <BookButton tone="solid" />
          </div>
        </div>
      </Section>
    </>
  );
}
