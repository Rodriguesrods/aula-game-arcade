import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/museum/Header";
import { About } from "@/components/museum/About";
import { Technologies } from "@/components/museum/Technologies";
import { Footer } from "@/components/museum/Footer";
import { siteConfig } from "@/config/site";

const title = "Sobre o projeto — Museu dos Jogos";
const description =
  "Como o Museu dos Jogos nasceu: um acervo de jogos criados pelos alunos durante as aulas de programação.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-6xl px-5 py-24">
            <p className="label-mono">{siteConfig.school}</p>
            <h1 className="mt-6 max-w-2xl text-4xl leading-[1.08] font-bold sm:text-5xl">
              Um museu construído aula após aula.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
        </section>
        <About />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}
