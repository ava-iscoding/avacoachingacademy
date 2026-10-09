<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep podcast show and featured-episode links in `src/config/podcast.ts`; use Spotify's official show embed for the automatically maintained episode list without a separate feed service.
- Resolve podcast artwork pointers against the stable published Lovable asset origin, not the current page origin, so external deployments can load the uploaded covers.
