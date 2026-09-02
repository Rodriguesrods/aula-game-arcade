import { Link } from "@tanstack/react-router";
import { games } from "@/data/games";
import { siteConfig } from "@/config/site";

export function Header() {
  const count = games.length;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-sm border border-border-strong">
            <span className="h-2 w-2 bg-yellow" />
          </span>
          <span className="truncate font-display text-base font-bold tracking-tight">
            {siteConfig.title}
          </span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7">
          <Link
            to="/"
            hash="jogos"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Jogos
          </Link>
          <Link
            to="/sobre"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre o projeto
          </Link>
          <span className="label-mono shrink-0 border-l border-border pl-5 whitespace-nowrap">
            {count} {count === 1 ? "jogo" : "jogos"} publicados
          </span>
        </nav>
      </div>
    </header>
  );
}
