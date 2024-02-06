import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

type Props = {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
};

const GenreList = ({
  onSelectGenre,
  selectedGenreId: selectedGenre,
}: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
                onClick={() => onSelectGenre(gen)}
                fontSize="lg"
                fontWeight={gen.id === selectedGenre ? "bold" : "normal"}
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
