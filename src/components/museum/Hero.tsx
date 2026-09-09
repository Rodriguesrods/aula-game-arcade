import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { games } from "@/data/games";
import { GameImage } from "./GameImage";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-61px)] overflow-hidden border-b border-border">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid min-h-[calc(100svh-61px)] max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div>
          <p className="label-mono rise-in">{siteConfig.eyebrow}</p>
          <h1 className="rise-in mt-7 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
            Cada jogo daqui
            <br />
            <span className="text-muted-foreground">nasceu numa aula.</span>
          </h1>
          <p className="rise-in mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/"
              hash="jogos"
              className="group inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Explorar jogos
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/sobre"
              className="inline-flex min-h-12 items-center justify-center border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Conhecer o projeto
            </Link>
          </div>

          <p className="label-mono mt-8">
            {games.length} {games.length === 1 ? "peça no acervo" : "peças no acervo"} · coleção {siteConfig.year}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-label="Prévia do acervo">
          <div className="grid grid-cols-[1fr_.72fr] items-end gap-3 sm:gap-5">
            {games.slice(0, 2).map((game, index) => (
              <Link
                key={game.id}
                to="/games/$gameId"
                params={{ gameId: game.id }}
                className={`group block border border-border bg-card p-2 transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${index === 1 ? "mb-8" : ""}`}
              >
                <GameImage game={game} className="aspect-[4/3] w-full border border-border" imageClassName="transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="flex items-center justify-between gap-3 px-2 py-3">
                  <span className="truncate font-display text-sm font-bold sm:text-base">{game.title}</span>
                  <span aria-hidden className="text-muted-foreground">↗</span>
                </div>
              </Link>
            ))}
          </div>
          <span aria-hidden className="absolute -right-2 bottom-0 h-16 w-px bg-yellow sm:-right-5" />
          <span aria-hidden className="absolute -right-2 bottom-0 h-px w-16 bg-yellow sm:-right-5" />
        </div>
      </div>
    </section>
  );
}
