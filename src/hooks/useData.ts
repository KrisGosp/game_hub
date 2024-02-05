import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

export type FetchRes<T> = {
  count: number;
  results: T[];
};

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<FetchRes<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => setData(res.data.results))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useData;
