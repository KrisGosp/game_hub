import { Badge } from "@chakra-ui/react";

type CriticScoreProps = {
  score: number;
};

const CriticScore = ({ score }: CriticScoreProps) => {
  const color =
    score > 75 ? "green" : score > 60 ? "yellow" : score > 40 ? "orange" : "";
  return <Badge colorScheme={color}>{score}</Badge>;
};

export default CriticScore;
