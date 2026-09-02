import type { Game } from "@/data/games";

export function GameSkills({ game }: { game: Game }) {
  if (!game.skills || game.skills.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16">
      <h2 className="label-mono">O que foi explorado</h2>
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {game.skills.map((skill) => (
          <li
            key={skill}
            className="label-mono border border-border bg-surface px-3 py-2 text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
