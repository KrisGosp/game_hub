import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import ScreenshotsGrid from "../components/ScreenshotsGrid";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error || !data) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <Box>
        <Heading>{data.name}</Heading>
        <ExpandableText text={data.description_raw} />
        <GameAttributes game={data} />
      </Box>
      <Box>
        <GameTrailer gameId={data.id} />
        <ScreenshotsGrid gameId={data.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
