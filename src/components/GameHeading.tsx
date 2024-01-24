import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" fontSize="60px">
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
