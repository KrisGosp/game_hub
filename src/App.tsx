import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameHeading from "./components/GameHeading";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
};

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: `200px 1fr`,
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2} marginBottom={5}>
          <GameHeading gameQuery={gameQuery} />
        </Box>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSortSelect={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
