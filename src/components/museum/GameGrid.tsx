import { games } from "@/data/games";
import { GameCard } from "./GameCard";
import { SectionHeading } from "./SectionHeading";

export function GameGrid() {
  return (
    <section id="jogos" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Acervo"
          title="Jogos em exposição"
          description="Projetos criados pelos alunos e publicados para todo mundo jogar."
        />

        {games.length === 0 ? (
          <div className="mt-12 border border-dashed border-border-strong p-12 text-center">
            <p className="font-display text-lg font-bold">Nenhum jogo cadastrado ainda</p>
            <p className="mt-2 text-sm text-muted-foreground">
              O acervo aparece aqui assim que o primeiro jogo for adicionado.
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
