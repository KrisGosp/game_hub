import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery?.platformId);

  return (
    <Heading as="h1" fontSize="60px">
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
