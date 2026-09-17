import type { Book } from "@/config/books";

export function BookGrid({ books }: { books: Book[] }) {
  return (
    <ul className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {books.map((b) => (
        <li key={b.title} className="flex flex-col bg-card p-8">
          {b.cover && (
            <img
              src={b.cover}
              alt={`Cover of ${b.title} by Ava Naeini`}
              loading="lazy"
              className="mb-7 w-full max-w-[13rem] border border-gold/40 object-cover"
            />
          )}

          <h3 className="font-display text-2xl leading-tight">{b.title}</h3>

          {b.subtitle && (
            <p className="mt-2 text-[0.64rem] tracking-[0.22em] text-muted-foreground uppercase">
              {b.subtitle}
            </p>
          )}

          <p className="mt-4 flex-1 text-sm leading-[1.9] text-muted-foreground">
            {b.description}
          </p>

          {b.href ? (
            <a
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex self-start border-b border-gold pb-1 text-[0.62rem] tracking-[0.24em] uppercase transition-opacity hover:opacity-70"
            >
              View on {b.store ?? "store"}
            </a>
          ) : (
            <p className="mt-7 text-[0.62rem] tracking-[0.24em] text-gold uppercase">
              {b.status ?? "Coming soon"}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
