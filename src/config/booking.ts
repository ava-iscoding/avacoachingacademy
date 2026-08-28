/**
 * ─────────────────────────────────────────────────────────────
 *  AVA COACHING ACADEMY — BOOKING CONFIGURATION
 *  This is the ONLY file you need to edit to connect TidyCal.
 * ─────────────────────────────────────────────────────────────
 *
 *  1. Replace TIDYCAL_USERNAME with Ava's actual TidyCal username.
 *  2. Replace each booking type's `path` with the real TidyCal
 *     booking-type path (the part after your username in the URL).
 *
 *  A TidyCal booking URL looks like:
 *      https://tidycal.com/<username>/<booking-path>
 *  e.g. https://tidycal.com/avacoaching/30-minute-meeting
 *
 *  The embed uses `data-path="<username>/<booking-path>"`.
 *
 *  Nothing here depends on Lovable hosting — this works after
 *  export to GitHub and deployment on Netlify, Vercel or
 *  Cloudflare Pages.
 */

// Replace with Ava's actual TidyCal username
export const TIDYCAL_USERNAME = "coachava2";

// Replace with Ava's actual TidyCal booking page URL (used as the
// graceful fallback link if the embedded calendar cannot load).
export const TIDYCAL_FALLBACK_URL = `https://tidycal.com/${TIDYCAL_USERNAME}`;

// Optional: if you ever move scheduling to book.avacoachingacademy.com,
// point this there. Leave as-is to keep booking at /book.
export const BOOKING_ROUTE = "/book";

export type BookingType = {
  id: string;
  title: string;
  duration: string;
  price: "free" | "paid";
  ctaLabel: string;
  description: string;
  /**
   * Replace with the real TidyCal booking-type path.
   * Placeholder format: YOUR_TIDYCAL_BOOKING_PATH
   */
  path: string;
};

export const BOOKING_TYPES: BookingType[] = [
 /* {
    id: "introductory",
    title: "Introductory Consultation",
    duration: "20 minutes",
    price: "free",
    ctaLabel: "Book an Introductory Call",
    description:
      "A short introductory conversation to understand your goals and see whether Ava Coaching Academy is the right space for you.",
    path: "YOUR_TIDYCAL_BOOKING_PATH_INTRODUCTORY",
  }, */
  {
    id: "thirty",
    title: "30-Minute Coaching Session",
    duration: "30 minutes",
    price: "paid",
    ctaLabel: "Reserve Your Session",
    description:
      "Focused support for one clear topic, decision, challenge, or transition you are moving through right now.",
    path: "YOUR_TIDYCAL_BOOKING_PATH_30MIN",
  },
  {
    id: "sixty",
    title: "60-Minute Coaching Session",
    duration: "60 minutes",
    price: "paid",
    ctaLabel: "Reserve Your Session",
    description:
      "A deeper conversation with room for reflection, exploration, emotional processing, and considered strategy.",
    path: "YOUR_TIDYCAL_BOOKING_PATH_60MIN",
  },
 /* {
    id: "freedom-clarity",
    title: "Freedom & Clarity Session",
    duration: "60 minutes",
    price: "paid",
    ctaLabel: "Book & Confirm",
    description:
      "For identifying what feels restrictive, confusing, emotionally heavy, or simply out of alignment with who you are becoming.",
    path: "YOUR_TIDYCAL_BOOKING_PATH_FREEDOM",
  }, 
  {
    id: "creative",
    title: "Creative Expression Session",
    duration: "60 minutes",
    price: "paid",
    ctaLabel: "Book & Confirm",
    description:
      "Centred on writing, journaling, creativity, emotional release, and reconnecting with your own inspiration.",
    path: "YOUR_TIDYCAL_BOOKING_PATH_CREATIVE",
  },
  {
    id: "meditation",
    title: "Meditation & Focus Session",
    duration: "45 minutes",
    price: "paid",
    ctaLabel: "Book & Confirm",
    description:
      "A guided session around stillness, concentration, observation, grounding, and building inner focus.",
    path: "YOUR_TIDYCAL_BOOKING_PATH_MEDITATION",
  },
  {
    id: "transition",
    title: "Transition & Reinvention Session",
    duration: "75 minutes",
    price: "paid",
    ctaLabel: "Reserve Your Session",
    description:
      "For those moving through career, relationship, identity, or location change — and trying to understand who they are becoming.",
    path: "YOUR_TIDYCAL_BOOKING_PATH_TRANSITION",
  }, */
]; 

/** Full external URL for a booking type (used for fallback links). */
export function bookingUrl(type?: BookingType) {
  if (!type) return TIDYCAL_FALLBACK_URL;
  return `https://tidycal.com/${TIDYCAL_USERNAME}/${type.path}`;
}

/** The `data-path` value TidyCal's embed script expects. */
export function bookingEmbedPath(type?: BookingType) {
  if (!type) return TIDYCAL_USERNAME;
  return `${TIDYCAL_USERNAME}/${type.path}`;
}

/** True while the placeholders above have not been replaced yet. */
export const TIDYCAL_CONFIGURED = !TIDYCAL_USERNAME.startsWith("YOUR_TIDYCAL");
