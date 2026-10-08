export type GameColor = "yellow" | "pink" | "green" | "blue" | "purple";

export interface Game {
  id: string;
  title: string;
  authors: string;
  description: string;
  technology: string;
  year?: number;
  image?: string;
  link?: string;
  embedUrl?: string;
  skills?: string[];
  idea?: string;
  learnings?: string[];
  process?: string;
  featured?: boolean;
  color?: GameColor;
}

/**
 * Para publicar um novo jogo, basta adicionar um objeto nesta lista.
 * Card, número do acervo, contagem e página individual são gerados automaticamente.
 * Coloque a imagem em public/games/<id>.png e informe em `image`.
 * A página /games/<id> usa idea (ideia), process (processo) e learnings
 * (lista de aprendizados). Preencha com informações reais; vazios ficam ocultos.
 */
export const games: Game[] = [
  {
    id: "detetive-da-logica",
    title: "Barbie Feia Aura",
    authors: "Programing Time",
    description: "Desvie do monstro.",
    technology: "MakeCode Arcade",
    year: 2026,
    image: "img/barbie_feia_aura.png",
    link: "https://arcade.makecode.com/26423-43314-86144-15754",
    skills: ["Lógica", "Condicionais", "Variáveis", "Eventos"],
    featured: true,
    color: "yellow",
  },
  {
    id: "as_aventuras_de_wiki",
    title: "As aventuras de wiki",
    authors: "Stevão",
    description: "Encontre a saída antes que o tempo acabe.",
    technology: "MakeCode Arcade",
    year: 2026,
    image: "/img//as_aventuras_de_wiki.png",
    link: "https://arcade.makecode.com/",
    skills: ["Coordenadas", "Colisões", "Temporizadores"],
    color: "green",
  },
  {
    id: "primeiro_multiplayer",
    title: "Primeiro multiplayer",
    authors: "Programing Time",
    description: "Desvie dos blocos e sobreviva o máximo que conseguir.",
    technology: "MakeCode Arcade",
    year: 2026,
    image: "img//primeiro_multiplayer.png",
    link: "https://arcade.makecode.com/96370-64596-55439-05096",
    skills: ["Repetição", "Pontuação", "Sprites"],
    color: "pink",
  },
  // ============ NOVOS SLOTS — preencha abaixo (jogos 04 a 10) ============
  // Dica: troque `title`, `authors`, `description` e `technology` pelos dados
  // reais. Opcional: `year`, `image` (public/games/<id>.png), `link` ou
  // `embedUrl`, `skills`, `idea`, `process`, `learnings` e `featured`.
  // O número do acervo, os cards e a página individual são gerados sozinhos.
  {
   id: "Clicker",
    title: "Super Clicker",
    authors: "Programing Time",
    description: "Clique no botão",
    technology: "CODE IA ",
    year: 2026,
    image: "/img//clicker.png",
    link: "https://studio.code.org/br/projects/gamelab/5bf81cfb-227d-42c4-af28-b0dac77f99df",
    skills: ["Repetição", "Pontuação", "Sprites","Condicionais"],
    color: "pink",
  },
  {
    id: "rascunho",
    title: "Rascunho",
    authors: "Programing Time",
    description: "Desvie do avião",
    technology: "MakeCode Arcade",
    year: 2026,
    image: "/img//rascunho.png",
    link: "https://arcade.makecode.com/S74725-50896-24028-27566",
    color: "purple",
  },
  {
    id: "novo-jogo-06",
    title: "Novo jogo 06",
    authors: "A definir",
    description: "Em breve",
    technology: "A definir",
    color: "yellow",
  },
];

export const defaultColor: GameColor = "blue";

export const gameColor = (game: Game): GameColor => game.color ?? defaultColor;

/** Número de catalogação automático, com base na posição no array. */
export const acervoNumber = (game: Game) => {
  const index = games.findIndex((g) => g.id === game.id);
  return String(index + 1).padStart(3, "0");
};

export const getGameById = (id: string) => games.find((game) => game.id === id);

export const featuredGames = () => games.filter((game) => game.featured);

export const gameNeighbors = (id: string) => {
  const index = games.findIndex((game) => game.id === id);
  return {
    previous: index > 0 ? games[index - 1] : undefined,
    next: index >= 0 && index < games.length - 1 ? games[index + 1] : undefined,
  };
};
