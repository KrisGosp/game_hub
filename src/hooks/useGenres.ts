import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

type Genre = {
  id: number;
  name: string;
};

type FetchGenresRes = {
  count: number;
  results: Genre[];
};

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGenresRes>("/genres")
      .then((res) => setGenres(res.data.results))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};
