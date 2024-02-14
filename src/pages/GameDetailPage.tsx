import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error || !data) throw error;
  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText text={data.description_raw} />
      <GameAttributes game={data} />
    </>
  );
};

export default GameDetailPage;
