import type { Game } from "@/data/games";

export function GameStory({ game }: { game: Game }) {
  const idea = game.idea?.trim();
  const process = game.process?.trim();
  const learnings = game.learnings?.map((item) => item.trim()).filter(Boolean) ?? [];

  if (!idea && !process && learnings.length === 0) return null;

  return (
    <section aria-label="História do projeto" className="mx-auto max-w-6xl px-5 pb-16">
      <div className="divide-y divide-border border-t border-border">
        {idea && (
          <div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr] md:gap-10">
            <h2 className="font-display text-xl font-bold">Ideia do projeto</h2>
            <p className="max-w-2xl whitespace-pre-line break-words text-base leading-relaxed text-muted-foreground">{idea}</p>
          </div>
        )}
        {process && (
          <div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr] md:gap-10">
            <h2 className="font-display text-xl font-bold">Processo de desenvolvimento</h2>
            <p className="max-w-2xl whitespace-pre-line break-words text-base leading-relaxed text-muted-foreground">{process}</p>
          </div>
        )}
        {learnings.length > 0 && (
          <div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr] md:gap-10">
            <h2 className="font-display text-xl font-bold">O que foi aprendido</h2>
            <ul className="max-w-2xl list-disc space-y-3 pl-5 text-base leading-relaxed text-muted-foreground">
              {learnings.map((item, index) => <li className="whitespace-pre-line break-words" key={`${index}-${item}`}>{item}</li>)}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}