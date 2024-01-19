import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { useGenres, Genre } from "../hooks/useGenres";
import getImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

type Props = {
  onSelectGenre: (genre: Genre) => void;
};

const GenreList = ({ onSelectGenre }: Props) => {
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
            <Button onClick={() => onSelectGenre(gen)} fontSize="lg">
              {gen.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
