import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -top-40 left-1/3 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--accent-blue)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <p className="label-mono rise-in">{siteConfig.eyebrow}</p>
        <h1 className="rise-in mt-7 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
          Cada jogo daqui
          <br />
          <span className="text-muted-foreground">nasceu numa aula.</span>
        </h1>
        <p className="rise-in mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {siteConfig.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/"
            hash="jogos"
            className="group inline-flex items-center gap-2 border border-border-strong bg-surface px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            Explorar jogos
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <div className="label-mono flex flex-wrap items-center gap-2">
            <span>
              {games.length} {games.length === 1 ? "peça no acervo" : "peças no acervo"}
            </span>
            <span className="text-border-strong">•</span>
            {siteConfig.stack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                {i > 0 && <span className="text-border-strong">•</span>}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
