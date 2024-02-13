import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery?.platformId);

  return (
    <Heading as="h1" fontSize="60px">
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
