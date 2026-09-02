import { Link } from "@tanstack/react-router";
import type { Game } from "@/data/games";
import { accentBg, accentText } from "./accent";

export function GameCard({ game, featured = false }: { game: Game; featured?: boolean }) {
  return (
    <Link
      to="/jogo/$gameId"
      params={{ gameId: game.id }}
      aria-label={`Jogar ${game.title}`}
      className={`group relative flex flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_30px_60px_-40px_oklch(0_0_0/80%)] ${
        featured ? "bg-surface" : ""
      }`}
    >
      <span className={`h-1 w-full ${accentBg[game.color]}`} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="label-mono">{featured ? "Em destaque" : "Peça do acervo"}</span>
          <span
            aria-hidden
            className={`grid h-6 w-6 place-items-center border border-border ${accentText[game.color]} transition-colors duration-300 group-hover:border-border-strong`}
          >
            <span className="block h-1.5 w-1.5 bg-current" />
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold sm:text-2xl">{game.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{game.authors}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">{game.description}</p>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
          <span className="label-mono">{game.technology}</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium">
            Jogar
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
