import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/jogo/$gameId")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/games/$gameId",
      params: { gameId: params.gameId },
      statusCode: 301,
    });
  },
});