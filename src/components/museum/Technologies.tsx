import { SectionHeading } from "./SectionHeading";

const tech = [
  { name: "MakeCode Arcade", note: "Blocos e JavaScript para criar jogos" },
  { name: "JavaScript", note: "Lógica, eventos e movimento" },
  { name: "HTML", note: "Estrutura das páginas" },
  { name: "CSS", note: "Layout, cor e ritmo visual" },
];

export function Technologies() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="Ferramentas" title="Tecnologias utilizadas" description="Recursos que ajudam a transformar lógica, criatividade e colaboração em jogos publicados." />
        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((item) => (
            <div key={item.name} className="min-h-36 bg-card p-6 transition-colors hover:bg-surface">
              <p className="font-display text-base font-bold">{item.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
