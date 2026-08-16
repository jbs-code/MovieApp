import { GenreBadge, useGenres } from "..";

import { type Dispatch, type SetStateAction } from "react";

interface Props {
  genres: number[];
  setGenres: Dispatch<SetStateAction<number[]>>;
}

export const GenresList = ({genres, setGenres}:Props) => {
  const { queryGenres } = useGenres();

  const onAddGenre = (genreId: number) => {
    if (genres.includes(genreId)) {
      const filteredGenres = genres.filter((g) => g !== genreId);
      setGenres(filteredGenres);
    } else {
      setGenres((current) => [...current, genreId]);
    }
  };

  return (
    <ul className="flex flex-wrap gap-2 justify-center">
      {queryGenres.data?.genres.map((genre) => (
        <GenreBadge
          genresSelected={genres}
          onGenreSelected={onAddGenre}
          key={genre.id}
          genre={genre}
        />
      ))}
    </ul>
  );
};
