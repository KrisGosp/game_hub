import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
};

type FetchGamesRes = {
  count: number;
  results: Game[];
};

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesRes>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));

    return () => controller.abort();
  }, []);
  return { games, error };
};
