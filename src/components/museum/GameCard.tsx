import { Link } from "@tanstack/react-router";
import type { Game } from "@/data/games";
import { acervoNumber, gameColor } from "@/data/games";
import { accentBg, accentText } from "./accent";
import { GameImage } from "./GameImage";

export function GameCard({ game }: { game: Game }) {
  const color = gameColor(game);

  return (
    <Link
      to="/games/$gameId"
      params={{ gameId: game.id }}
      aria-label={`Abrir ficha de ${game.title}`}
      className="group relative flex flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_30px_60px_-40px_oklch(0_0_0/80%)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3">
        <span className="label-mono">Acervo nº {acervoNumber(game)}</span>
        <span aria-hidden className={`h-1.5 w-1.5 ${accentBg[color]}`} />
      </div>

      <GameImage
        game={game}
        className="aspect-[4/3] w-full border-b border-border"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.04]"
      />

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold sm:text-xl">{game.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{game.authors}</p>
        <p className={`label-mono mt-4 ${accentText[color]}`}>
          {game.technology}
          {game.year ? ` · ${game.year}` : ""}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">{game.description}</p>

        <span className="mt-6 inline-flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium">
          Jogar
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
