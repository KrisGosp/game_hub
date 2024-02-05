import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchRes } from "./useData";
import genres from "../data/genres";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

export const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchRes<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });
};

// useData<Genre>("/genres")
