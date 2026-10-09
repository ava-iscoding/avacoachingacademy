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

- Keep podcast links and the RSS feed in `src/config/podcast.ts`; fetch the public CORS-enabled RSS in the browser for automatic episode listings without a feed service, while retaining Spotify's official player.
- Resolve podcast artwork pointers against the stable published Lovable asset origin, not the current page origin, so external deployments can load the uploaded covers.
