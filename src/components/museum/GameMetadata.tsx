import type { Game } from "@/data/games";
import { acervoNumber } from "@/data/games";

export function GameMetadata({ game }: { game: Game }) {
  const rows = [
    { label: "Acervo", value: `Nº ${acervoNumber(game)}` },
    { label: "Autores", value: game.authors },
    { label: "Ano", value: game.year ? String(game.year) : undefined },
    { label: "Tecnologia", value: game.technology },
  ].filter((row) => Boolean(row.value));

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="label-mono">Ficha da obra</h2>
      <dl className="mt-6 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {rows.map((row) => (
          <div key={row.label} className="bg-card p-5">
            <dt className="label-mono">{row.label}</dt>
            <dd className="mt-3 font-display text-base font-bold">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
