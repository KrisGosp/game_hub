import { useGenres } from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
      <li>a</li>
    </ul>
  );
};

export default GenreList;
