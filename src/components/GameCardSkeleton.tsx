import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      width={{
        sm: "500px",
        md: "370px",
        lg: "300px",
        xl: "300px",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      <Skeleton
        height={{
          sm: "400px",
          md: "350px",
          lg: "300px",
          xl: "330px",
        }}
      />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
