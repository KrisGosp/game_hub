import { useGenres } from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
      <li>a</li>
    </ul>
  );
};

export default GenreList;
