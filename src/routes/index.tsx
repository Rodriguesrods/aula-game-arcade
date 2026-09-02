import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/museum/Header";
import { Hero } from "@/components/museum/Hero";
import { GameGrid } from "@/components/museum/GameGrid";
import { FeaturedGames } from "@/components/museum/FeaturedGames";
import { About } from "@/components/museum/About";
import { Technologies } from "@/components/museum/Technologies";
import { Footer } from "@/components/museum/Footer";

const title = "Museu dos Jogos — galeria digital de jogos feitos em aula";
const description =
  "Acervo de jogos criados por alunos durante as aulas de programação. Conheça e jogue os projetos direto no navegador.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedGames />
        <GameGrid />
        <About />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}
