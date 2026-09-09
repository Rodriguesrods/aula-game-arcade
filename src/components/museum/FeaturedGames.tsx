import { Link } from "@tanstack/react-router";
import { acervoNumber, featuredGames, gameColor, type Game } from "@/data/games";
import { accentBg, accentText } from "./accent";
import { GameImage } from "./GameImage";
import { SectionHeading } from "./SectionHeading";

export function FeaturedGames() {
  const featured = featuredGames();
  if (featured.length === 0) return null;

  const main = featured[0];
  const rest = featured.slice(1);
  if (!main) return null;

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
    <article className="museum-shadow group grid overflow-hidden border border-border bg-surface transition-colors duration-300 hover:border-border-strong lg:col-span-3 lg:grid-cols-[1.35fr_1fr]">
      <GameImage
        game={game}
        className="aspect-[16/10] min-h-full w-full border-b border-border lg:border-r lg:border-b-0"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
        <div className="flex items-center gap-3">
          <span aria-hidden className={`h-1 w-8 ${accentBg[color]}`} />
          <span className="label-mono">Acervo nº {acervoNumber(game)}</span>
        </div>
        <h3 className="mt-6 text-3xl font-bold sm:text-5xl">{game.title}</h3>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground/90 sm:text-base">
          {game.description}
        </p>
        <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-border pt-5 text-sm">
          <div><dt className="label-mono">Equipe</dt><dd className="mt-1.5">{game.authors}</dd></div>
          <div><dt className="label-mono">Tecnologia</dt><dd className={`mt-1.5 ${accentText[color]}`}>{game.technology}</dd></div>
          {game.year && <div><dt className="label-mono">Ano</dt><dd className="mt-1.5">{game.year}</dd></div>}
        </dl>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {game.link ? (
            <a href={game.link} target="_blank" rel="noreferrer noopener" className="inline-flex min-h-12 items-center gap-2 bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">Jogar agora <span aria-hidden>↗</span></a>
          ) : (
            <Link to="/games/$gameId" params={{ gameId: game.id }} className="inline-flex min-h-12 items-center gap-2 bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">Jogar agora <span aria-hidden>→</span></Link>
          )}
          <Link to="/games/$gameId" params={{ gameId: game.id }} className="inline-flex min-h-11 items-center border-b border-border-strong text-sm font-medium transition-colors hover:border-foreground">Ver projeto</Link>
        </div>
      </div>
    </article>
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
