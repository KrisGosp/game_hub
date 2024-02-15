import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data } = useTrailer(gameId);
  const first = data?.results[0];
  console.log(data);
  return (
    <video src={first?.data[480]} poster={first?.preview} controls></video>
  );
};

export default GameTrailer;
