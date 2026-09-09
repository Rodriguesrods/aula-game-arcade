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
 */
export const games: Game[] = [
  {
    id: "detetive-da-logica",
    title: "Detetive da Lógica",
    authors: "Equipe Pixel",
    description: "Resolva os desafios usando lógica e atenção.",
    technology: "MakeCode Arcade",
    year: 2026,
    link: "https://arcade.makecode.com/",
    skills: ["Lógica", "Condicionais", "Variáveis", "Eventos"],
    featured: true,
    color: "yellow",
  },
  {
    id: "fuga-do-labirinto",
    title: "Fuga do Labirinto",
    authors: "João e Pedro",
    description: "Encontre a saída antes que o tempo acabe.",
    technology: "MakeCode Arcade",
    year: 2026,
    link: "https://arcade.makecode.com/",
    skills: ["Coordenadas", "Colisões", "Temporizadores"],
    color: "green",
  },
  {
    id: "chuva-de-pixels",
    title: "Chuva de Pixels",
    authors: "Turma da tarde",
    description: "Desvie dos blocos e sobreviva o máximo que conseguir.",
    technology: "MakeCode Arcade",
    year: 2026,
    link: "https://arcade.makecode.com/",
    skills: ["Repetição", "Pontuação", "Sprites"],
    color: "pink",
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
