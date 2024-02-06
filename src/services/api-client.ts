import axios from "axios";

export type FetchRes<T> = {
  count: number;
  results: T[];
};

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_DATA_KEY,
  },
});
