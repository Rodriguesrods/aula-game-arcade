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

- Generate individual game pages from `public/games.ts` at `/games/$gameId` and redirect `/jogo/$gameId` permanently to preserve old shared URLs.
- Render optional project narratives through `GameStory`, trimming blank text and learning entries so unfilled data never produces empty sections.
