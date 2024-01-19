import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import getImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {data.map((gen) => (
        <ListItem key={gen.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="40px"
              borderRadius={8}
              src={getImageUrl(gen.image_background)}
            />
            <Text fontSize="lg">{gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
