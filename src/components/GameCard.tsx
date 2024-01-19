import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/UseGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
