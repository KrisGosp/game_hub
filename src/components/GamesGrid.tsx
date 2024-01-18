import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

type Game = {
  id: number;
  name: string;
};

type FetchGamesRes = {
  count: number;
  results: Game[];
};

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesRes>("/games")
      .then((res) => {
        console.log("aaaaa");
        setGames(res.data.results);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <React.Fragment>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default GamesGrid;
