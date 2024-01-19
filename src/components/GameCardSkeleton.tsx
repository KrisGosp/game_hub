import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton
          height={{
            sm: "500px",
            md: "320px",
            lg: "250px",
            xl: "270px",
          }}
        />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
