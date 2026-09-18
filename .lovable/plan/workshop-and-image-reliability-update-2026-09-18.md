# Workshop and image reliability update

## What will change
- Replace the book-cover CDN pointers with normal, committed image files and update their imports so GitHub and Cloudflare Pages builds carry the covers with the site.
- Audit exact filename capitalization and public paths, then verify direct page loads and refreshes on the homepage, Books, and Workshop pages.
- Reorganize the Workshop page under two clear categories while preserving every existing children’s workshop section, image, and booking link.
- Add a Soundbath Meditation Workshops category using the two uploaded beach photos, with calm introductory copy and a “Book a Consultation” link to Ava’s existing TidyCal consultation page.
- Update Workshop navigation wording where needed without changing the site’s branding.

## Verification
- Confirm all local and generated image requests return successfully.
- Check the relevant pages at desktop and mobile sizes, including direct navigation and refresh.
- Confirm the consultation button opens the configured TidyCal link.
- Check the latest automated build result before completion.

## Technical details
- Use bundled image imports or committed `public/images` assets with exact-case paths; avoid deployment-specific asset URLs.
- Keep the current TanStack routes, semantic design tokens, typography, spacing, and accessibility patterns.
- Use the current `TIDYCAL_FALLBACK_URL` as the single consultation destination.
