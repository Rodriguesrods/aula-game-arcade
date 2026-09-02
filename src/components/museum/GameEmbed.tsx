import type { Game } from "@/data/games";

export function GameEmbed({ game }: { game: Game }) {
  if (game.embedUrl) {
    return (
      <div className="mt-6 overflow-hidden border border-border bg-card">
        <div className="aspect-[4/3] w-full sm:aspect-video">
          <iframe
            src={game.embedUrl}
            title={`Jogar ${game.title}`}
            allowFullScreen
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 border border-dashed border-border-strong p-8 text-center sm:p-12">
      <p className="font-display text-lg font-bold">
        Este jogo ainda não possui uma versão incorporada.
      </p>
      {game.link ? (
        <a
          href={game.link}
          target="_blank"
          rel="noreferrer noopener"
          className="group mt-6 inline-flex min-h-11 items-center gap-2 border border-border-strong bg-surface px-5 py-3 text-sm font-medium transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          Abrir no MakeCode
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </a>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">
          Este jogo ainda não possui um link disponível.
        </p>
      )}
    </div>
  );
}
