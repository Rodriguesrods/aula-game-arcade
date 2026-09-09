import { SectionHeading } from "./SectionHeading";

const steps = [
  { title: "Ideia", description: "O que queremos criar?" },
  { title: "Lógica", description: "Como o jogo vai funcionar?" },
  { title: "Código", description: "Transformando a ideia em comandos." },
  { title: "Teste", description: "Jogando, errando e ajustando." },
  { title: "Publicado", description: "Compartilhando o resultado." },
];
const accents = ["bg-yellow", "bg-pink", "bg-green", "bg-blue", "bg-purple"];

export function About() {
  return (
    <section id="como-nasceu" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Sobre o projeto"
          title="Como esse museu nasceu"
          description="Durante as aulas, os alunos aprendem programação colocando ideias em prática. Cada jogo representa uma experiência, uma tentativa, um problema resolvido e uma nova habilidade aprendida."
        />

        <ol className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title} className="group relative min-h-52 bg-card p-6 transition-colors hover:bg-surface">
              <div className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 ${accents[i]}`} />
                <span className="label-mono">0{i + 1}</span>
              </div>
              <p className="mt-8 font-display text-lg font-bold">{step.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              <span
                aria-hidden
                className="absolute right-6 bottom-5 block text-sm text-muted-foreground transition-transform duration-300 group-hover:translate-x-1"
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
