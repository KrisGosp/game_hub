import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/UseGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading>{game.name}</Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
