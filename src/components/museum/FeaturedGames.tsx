import { featuredGames } from "@/data/games";
import { GameCard } from "./GameCard";
import { SectionHeading } from "./SectionHeading";

export function FeaturedGames() {
  const featured = featuredGames();
  if (featured.length === 0) return null;

  return (
    <section className="relative border-b border-border">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Hall da fama"
          title="Em destaque"
          description="Jogos escolhidos pela turma para ocupar a sala principal do museu."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featured.map((game) => (
            <GameCard key={game.id} game={game} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
