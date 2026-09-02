import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-bold">{siteConfig.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">Projetos criados em sala de aula.</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Projeto desenvolvido durante as aulas de programação.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 bg-yellow" />
          <span className="h-1.5 w-1.5 bg-pink" />
          <span className="h-1.5 w-1.5 bg-green" />
          <span className="h-1.5 w-1.5 bg-blue" />
          <span className="h-1.5 w-1.5 bg-purple" />
          <span className="label-mono ml-3">{siteConfig.year}</span>
        </div>
      </div>
    </footer>
  );
}
