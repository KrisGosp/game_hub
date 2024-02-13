import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { gameQuery, setGenreId } = useGameQueryStore();

  if (error) return null;

  return (
    <>
      <Heading fontSize="3xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
        {data?.results.map((gen) => (
          <ListItem key={gen.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="40px"
                borderRadius={8}
                src={getImageUrl(gen.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                // objectFit="cover"
                onClick={() => setGenreId(gen.id)}
                fontSize="lg"
                fontWeight={gen.id === gameQuery.genreId ? "bold" : "normal"}
              >
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
