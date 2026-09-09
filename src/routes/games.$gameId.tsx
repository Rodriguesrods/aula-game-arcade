import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/museum/Header";
import { Footer } from "@/components/museum/Footer";
import { GameImage } from "@/components/museum/GameImage";
import { GameEmbed } from "@/components/museum/GameEmbed";
import { GameMetadata } from "@/components/museum/GameMetadata";
import { GameSkills } from "@/components/museum/GameSkills";
import { accentBg } from "@/components/museum/accent";
import { acervoNumber, gameColor, gameNeighbors, getGameById } from "@/data/games";

export const Route = createFileRoute("/games/$gameId")({
  loader: ({ params }) => {
    const game = getGameById(params.gameId);
    if (!game) throw notFound();
    return { gameId: game.id };
  },
  head: ({ loaderData }) => {
    const game = loaderData ? getGameById(loaderData.gameId) : undefined;
    if (!game) {
      return {
        meta: [
          { title: "Jogo não encontrado — Museu dos Jogos" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${game.title} — Museu dos Jogos`;
    return {
      meta: [
        { title },
        { name: "description", content: game.description },
        { property: "og:title", content: title },
        { property: "og:description", content: game.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: GameNotFound,
  component: GamePage,
});

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function GameNotFound() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-32 text-center">
        <p className="label-mono">Sala vazia</p>
        <h1 className="mt-5 text-3xl font-bold sm:text-4xl">Peça não encontrada</h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          Esse jogo pode ter saído do acervo ou o endereço está incorreto.
        </p>
        <Link
          to="/"
          hash="jogos"
          className="mt-8 inline-flex min-h-11 items-center gap-2 border border-border-strong bg-surface px-5 py-3 text-sm font-medium transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          Voltar ao acervo
        </Link>
      </div>
    </Shell>
  );
}

function GamePage() {
  const { gameId } = Route.useLoaderData();
  const game = getGameById(gameId);
  if (!game) return <GameNotFound />;

  const color = gameColor(game);
  const { previous, next } = gameNeighbors(game.id);

  return (
    <Shell>
      <section className="relative border-b border-border">
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <Link
            to="/"
            hash="jogos"
            className="label-mono inline-flex min-h-11 items-center gap-2 transition-colors hover:text-foreground"
          >
            ← Acervo
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span aria-hidden className={`h-1 w-10 ${accentBg[color]}`} />
                <span className="label-mono">Acervo nº {acervoNumber(game)}</span>
              </div>

              <h1 className="mt-5 text-3xl font-bold sm:text-5xl">{game.title}</h1>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">{game.authors}</p>
              <p className="label-mono mt-4">
                {game.technology}
                {game.year ? ` · ${game.year}` : ""}
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                {game.description}
              </p>
            </div>

            <GameImage game={game} className="aspect-[16/10] w-full border border-border" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="label-mono">Sala de jogo</p>
        <GameEmbed game={game} />
      </section>

      <GameMetadata game={game} />
      <GameSkills game={game} />

      {(game.idea || game.learnings?.length || game.process) && (
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {game.idea && <div className="bg-card p-6"><h2 className="label-mono">Ideia do projeto</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{game.idea}</p></div>}
            {game.learnings && game.learnings.length > 0 && <div className="bg-card p-6"><h2 className="label-mono">O que foi aprendido</h2><ul className="mt-4 space-y-2 text-sm text-muted-foreground">{game.learnings.map((item) => <li key={item}>— {item}</li>)}</ul></div>}
            {game.process && <div className="bg-card p-6"><h2 className="label-mono">Processo de desenvolvimento</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{game.process}</p></div>}
          </div>
        </section>
      )}

      {(previous || next) && (
        <nav
          aria-label="Navegar pelo acervo"
          className="mx-auto grid max-w-6xl gap-px border-t border-border px-5 py-12 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              to="/games/$gameId"
              params={{ gameId: previous.id }}
              className="group border border-border bg-card p-6 transition-colors hover:bg-surface"
            >
              <span className="label-mono">← Peça anterior</span>
              <p className="mt-3 font-display text-lg font-bold">{previous.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to="/games/$gameId"
              params={{ gameId: next.id }}
              className="group border border-border bg-card p-6 text-right transition-colors hover:bg-surface"
            >
              <span className="label-mono">Próxima peça →</span>
              <p className="mt-3 font-display text-lg font-bold">{next.title}</p>
            </Link>
          )}
        </nav>
      )}
    </Shell>
  );
}
