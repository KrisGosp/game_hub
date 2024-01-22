import { Platform } from "./UseGames";
import useData from "./useData";

const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
