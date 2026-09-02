import type { Game } from "@/data/games";
import { gameColor } from "@/data/games";
import { accentBg } from "./accent";

/**
 * Registro fotográfico da peça. Sem `image`, mostra um placeholder discreto
 * que combina com a linguagem do museu — sem quebrar o layout.
 */
export function GameImage({
  game,
  className = "",
  imageClassName = "",
}: {
  game: Game;
  className?: string;
  imageClassName?: string;
}) {
  if (!game.image) {
    return (
      <div
        className={`grid-backdrop relative grid place-items-center bg-surface ${className}`}
        role="img"
        aria-label={`Sem registro visual de ${game.title}`}
      >
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <span className={`h-2 w-2 ${accentBg[gameColor(game)]}`} />
          <span className="label-mono">Sem registro visual</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <img
        src={game.image}
        alt={`Tela do jogo ${game.title}`}
        loading="lazy"
        className={`h-full w-full object-cover ${imageClassName}`}
      />
    </div>
  );
}
