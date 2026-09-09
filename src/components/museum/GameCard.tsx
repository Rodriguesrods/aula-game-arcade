import { Link } from "@tanstack/react-router";
import type { Game } from "@/data/games";
import { acervoNumber, gameColor } from "@/data/games";
import { accentBg, accentText } from "./accent";
import { GameImage } from "./GameImage";

export function GameCard({ game }: { game: Game }) {
  const color = gameColor(game);

  return (
    <article className="museum-shadow group relative flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong">
      <GameImage
        game={game}
        className="aspect-[16/10] w-full border-b border-border"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.04]"
      />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="label-mono">Acervo nº {acervoNumber(game)}</span>
          <span aria-hidden className={`h-1.5 w-1.5 ${accentBg[color]}`} />
        </div>
        <h3 className="mt-5 text-xl font-bold sm:text-2xl">{game.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">{game.description}</p>
        <p className="mt-5 text-sm text-muted-foreground">{game.authors}</p>
        <p className={`label-mono mt-3 ${accentText[color]}`}>
          {game.technology}
          {game.year ? ` · ${game.year}` : ""}
        </p>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
          {game.link ? <a href={game.link} target="_blank" rel="noreferrer noopener" className="inline-flex min-h-11 items-center gap-1.5 bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">Jogar agora <span aria-hidden>↗</span></a> : <Link to="/games/$gameId" params={{ gameId: game.id }} className="inline-flex min-h-11 items-center bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground">Jogar agora</Link>}
          <Link to="/games/$gameId" params={{ gameId: game.id }} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Ver projeto</Link>
        </div>
      </div>
    </article>
  );
}
