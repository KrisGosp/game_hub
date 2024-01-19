import useData from "./useData";

type Genre = {
  id: number;
  name: string;
};

export const useGenres = () => useData<Genre>("/genres");
