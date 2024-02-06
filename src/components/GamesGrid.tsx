import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import React from "react";

type Props = {
  gameQuery: GameQuery;
};

const GamesGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <p>{error.message}</p>;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Button
        marginLeft="10px"
        marginY={10}
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>
    </Box>
  );
};

export default GamesGrid;
