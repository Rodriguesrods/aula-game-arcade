import { SectionHeading } from "./SectionHeading";

const steps = ["Ideia", "Lógica", "Código", "Teste", "Jogo publicado"];
const accents = ["bg-yellow", "bg-pink", "bg-green", "bg-blue", "bg-purple"];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Sobre o projeto"
          title="Como esse museu nasceu"
          description="Durante as aulas, os alunos aprendem programação colocando ideias em prática. Cada jogo representa uma experiência, uma tentativa, um problema resolvido e uma nova habilidade aprendida."
        />

        <ol className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step} className="group bg-card p-6 transition-colors hover:bg-surface">
              <div className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 ${accents[i]}`} />
                <span className="label-mono">0{i + 1}</span>
              </div>
              <p className="mt-6 font-display text-lg font-bold">{step}</p>
              <span
                aria-hidden
                className="mt-2 block text-sm text-muted-foreground transition-transform duration-300 group-hover:translate-x-1"
              >
                {i === steps.length - 1 ? "●" : "→"}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
