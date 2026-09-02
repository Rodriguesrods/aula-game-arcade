import { games } from "@/data/games";
import { siteConfig } from "@/config/site";
import { GameCard } from "./GameCard";
import { SectionHeading } from "./SectionHeading";

export function GameGrid() {
  return (
    <section id="jogos" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Acervo"
          title="Acervo"
          description="Projetos criados pelos alunos e publicados para todo mundo jogar."
        />
        <p className="label-mono mt-6">
          Coleção de jogos · {siteConfig.year}
          {siteConfig.schoolName ? ` · ${siteConfig.schoolName}` : ""}
        </p>

        {games.length === 0 ? (
          <div className="mt-12 border border-dashed border-border-strong p-12 text-center">
            <p className="font-display text-lg font-bold">O acervo ainda está sendo preparado.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Novos jogos serão adicionados em breve.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
