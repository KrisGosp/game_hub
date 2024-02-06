import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchRes } from "../services/api-client";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchRes<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
