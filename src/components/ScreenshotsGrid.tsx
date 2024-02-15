import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const ScreenshotsGrid = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (error) throw error;
  if (isLoading) return null;
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={5}
      marginTop="30px"
    >
      {data?.results.map((shot) => (
        <Image key={shot.id} src={shot.image} borderRadius="5px"></Image>
      ))}
    </SimpleGrid>
  );
};

export default ScreenshotsGrid;
