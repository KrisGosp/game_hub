import { create } from "zustand";

type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
};

type GameQueryStore = {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
};

const useMyStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

export default useMyStore;
