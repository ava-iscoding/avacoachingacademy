export type Book = {
  title: string;
  subtitle?: string;
  description: string;
  href?: string;
  store?: string;
  status?: string;
  cover?: string;
};

export const CHILDREN_BOOKS: Book[] = [
  {
    title: "Emoji's Fun",
    description:
      "A playful picture book that helps children name what they feel — turning everyday emotions into something they can recognise, talk about and share.",
    href: "https://a.co/d/0cRZL7f4",
    store: "Amazon",
  },
  {
    title: "Magical Friends",
    subtitle: "Luna • Draco • Mira • Lyla",
    description:
      "Four gentle companions guide young readers through friendship, courage and kindness — stories written to build imagination and self-belief.",
    href: "https://a.co/d/0b5LpshF",
    store: "Amazon",
  },
  {
    title: "Learning Persian Calligraphy",
    subtitle: "A Practice Workbook for Beginners",
    description:
      "A calm, hands-on workbook introducing the beauty of Persian script — patience, focus and heritage practised one stroke at a time.",
    href: "https://a.co/d/0iYbxAuT",
    store: "Amazon",
  },
  {
    title: "The New Age Language Definitions",
    description:
      "A clear, child-friendly guide to the words of modern spiritual and emotional life, so young readers can understand the language around them.",
    href: "https://a.co/d/02jFzG9Q",
    store: "Amazon — Kindle",
  },
  {
    title: "The Princess of Persia",
    subtitle: "Artemis and the Dragon",
    description:
      "A hardcover tale of bravery, heritage and heart — a young princess discovers that true strength begins with knowing who she is.",
    href: "https://www.lulu.com/shop/ava-naeini-and-ava-naeini/the-princess-of-persia-artemis-and-the-dragon/hardcover/product-84wkqre.html",
    store: "Lulu — Hardcover",
  },
];

export const ADULT_BOOKS: Book[] = [
  {
    title: "Quranic Secrets",
    subtitle: "Timeless Wisdom from the Quran for a Meaningful Life",
    description:
      "A reflective book on faith, ethics and meaning — discover, reflect, transform. Written for anyone seeking timeless wisdom in everyday life.",
    status: "Publication date: TBD",
    cover: "/images/quranic-secrets.jpg",
  },
];
