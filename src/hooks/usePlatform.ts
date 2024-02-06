import { useQuery } from "@tanstack/react-query";
import { Platform } from "./UseGames";
import platforms from "../data/platforms";
import { FetchRes } from "./useData";
import apiClient from "../services/api-client";

const usePlatform = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchRes<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatform;
