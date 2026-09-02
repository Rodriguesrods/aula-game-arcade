import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/museum/Header";
import { Footer } from "@/components/museum/Footer";
import { getGameById } from "@/data/games";
import { accentBg } from "@/components/museum/accent";

export const Route = createFileRoute("/jogo/$gameId")({
  loader: ({ params }) => {
    const game = getGameById(params.gameId);
    if (!game) throw notFound();
    return { game };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Jogo não encontrado — Museu dos Jogos" }, { name: "robots", content: "noindex" }],
      };
    }
    const { game } = loaderData;
    const title = `${game.title} — Museu dos Jogos`;
    return {
      meta: [
        { title },
        { name: "description", content: game.description },
        { property: "og:title", content: title },
        { property: "og:description", content: game.description },
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
        <h1 className="mt-5 text-3xl font-bold sm:text-4xl">Jogo não encontrado</h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          Esse jogo pode ter sido removido do acervo ou o endereço está incorreto.
        </p>
        <Link
          to="/"
          hash="jogos"
          className="mt-8 inline-flex items-center gap-2 border border-border-strong bg-surface px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          Voltar ao acervo
        </Link>
      </div>
    </Shell>
  );
}

function GamePage() {
  const { game } = Route.useLoaderData();

  return (
    <Shell>
      <section className="relative border-b border-border">
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <Link
            to="/"
            hash="jogos"
            className="label-mono inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            ← Acervo
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className={`h-1 w-10 ${accentBg[game.color]}`} />
            <span className="label-mono">{game.technology}</span>
          </div>

          <h1 className="mt-5 text-3xl font-bold sm:text-5xl">{game.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{game.authors}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {game.description}
          </p>

          {game.link ? (
            <a
              href={game.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-8 inline-flex items-center gap-2 border border-border-strong bg-surface px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              Abrir no MakeCode
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5">↗</span>
            </a>
          ) : (
            <p className="mt-8 inline-block border border-dashed border-border-strong px-5 py-3 text-sm text-muted-foreground">
              Link do jogo indisponível no momento.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="label-mono">Sala de jogo</p>
        {game.embedUrl ? (
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
        ) : (
          <div className="mt-6 border border-dashed border-border-strong p-12 text-center">
            <p className="font-display text-lg font-bold">Embed ainda não disponível</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Este jogo ainda não tem um endereço de incorporação. Use o botão “Abrir no MakeCode”
              para jogar em uma nova aba.
            </p>
          </div>
        )}
      </section>
    </Shell>
  );
}
