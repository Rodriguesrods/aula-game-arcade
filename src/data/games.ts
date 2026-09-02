export type GameColor = "yellow" | "pink" | "green" | "blue" | "purple";

export type Game = {
  id: string;
  title: string;
  authors: string;
  description: string;
  technology: string;
  link?: string;
  embedUrl?: string;
  featured?: boolean;
  color: GameColor;
};

/**
 * Para publicar um novo jogo, basta adicionar um objeto nesta lista.
 * O card, a contagem do acervo e a página individual são gerados automaticamente.
 */
export const games: Game[] = [
  {
    id: "detetive-da-logica",
    title: "Detetive da Lógica",
    authors: "Equipe Pixel",
    description: "Resolva os desafios usando lógica e atenção.",
    technology: "MakeCode Arcade",
    link: "https://arcade.makecode.com/",
    embedUrl: "",
    featured: true,
    color: "yellow",
  },
  {
    id: "fuga-do-labirinto",
    title: "Fuga do Labirinto",
    authors: "João e Pedro",
    description: "Encontre a saída antes que o tempo acabe.",
    technology: "MakeCode Arcade",
    link: "https://arcade.makecode.com/",
    embedUrl: "",
    featured: false,
    color: "green",
  },
  {
    id: "chuva-de-pixels",
    title: "Chuva de Pixels",
    authors: "Turma da tarde",
    description: "Desvie dos blocos e sobreviva o máximo que conseguir.",
    technology: "MakeCode Arcade",
    link: "https://arcade.makecode.com/",
    embedUrl: "",
    featured: false,
    color: "pink",
  },
];

export const getGameById = (id: string) => games.find((game) => game.id === id);

export const featuredGames = () => games.filter((game) => game.featured);
