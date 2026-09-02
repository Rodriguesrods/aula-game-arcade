import { Link } from "@tanstack/react-router";
import { acervoNumber, featuredGames, gameColor, type Game } from "@/data/games";
import { accentBg, accentText } from "./accent";
import { GameImage } from "./GameImage";
import { SectionHeading } from "./SectionHeading";

export function FeaturedGames() {
  const featured = featuredGames();
  if (featured.length === 0) return null;

  const [main, ...rest] = featured;

  return (
    <section className="relative border-b border-border">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Exposição principal"
          title="Em destaque"
          description="Peças escolhidas pela turma para ocupar a sala principal do museu."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <FeaturedMain game={main} />
          {rest.length > 0 && (
            <div className="grid gap-5">
              {rest.map((game) => (
                <FeaturedSmall key={game.id} game={game} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FeaturedMain({ game }: { game: Game }) {
  const color = gameColor(game);

  return (
    <Link
      to="/games/$gameId"
      params={{ gameId: game.id }}
      aria-label={`Abrir ficha de ${game.title}`}
      className="group flex flex-col overflow-hidden border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-border-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:col-span-2"
    >
      <GameImage
        game={game}
        className="aspect-[16/9] w-full border-b border-border"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span aria-hidden className={`h-1 w-8 ${accentBg[color]}`} />
          <span className="label-mono">Acervo nº {acervoNumber(game)}</span>
        </div>
        <h3 className="mt-5 text-2xl font-bold sm:text-4xl">{game.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">{game.authors}</p>
        <p className={`label-mono mt-4 ${accentText[color]}`}>
          {game.technology}
          {game.year ? ` · ${game.year}` : ""}
        </p>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground/90 sm:text-base">
          {game.description}
        </p>
        <span className="mt-8 inline-flex items-center gap-2 self-start border border-border-strong px-4 py-2.5 text-sm font-medium transition-colors group-hover:bg-accent">
          Jogar
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

function FeaturedSmall({ game }: { game: Game }) {
  const color = gameColor(game);

  return (
    <Link
      to="/games/$gameId"
      params={{ gameId: game.id }}
      aria-label={`Abrir ficha de ${game.title}`}
      className="group flex flex-1 gap-4 overflow-hidden border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <GameImage
        game={game}
        className="h-24 w-24 shrink-0 border border-border"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.06]"
      />
      <div className="min-w-0">
        <span className="label-mono">Acervo nº {acervoNumber(game)}</span>
        <h3 className="mt-2 truncate text-base font-bold">{game.title}</h3>
        <p className="truncate text-sm text-muted-foreground">{game.authors}</p>
        <p className={`label-mono mt-2 ${accentText[color]}`}>
          {game.technology}
          {game.year ? ` · ${game.year}` : ""}
        </p>
      </div>
    </Link>
  );
}
