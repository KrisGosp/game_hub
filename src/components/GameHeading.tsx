import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  return (
    <Heading as="h1" fontSize="60px">
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
