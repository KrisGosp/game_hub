import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

type Game = {
  id: number;
  name: string;
  background_image: string;
};

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
