import { SearchMovie, SearchMovieInput } from "./search";

import { GenresList } from "./genres";
import { MovieList } from "./movies";
import { useDebounce } from "./shared";
import { useState } from "react";

function MoviesApp() {
  const [genres, setGenres] = useState<number[]>([]);
  const [inputSearch, setInputSearch] = useState<string>(
    localStorage.getItem("query") || "",
  );
  const debouncedQuery = useDebounce(inputSearch);

  return (
    <>
      <SearchMovieInput input={inputSearch} setInput={setInputSearch} />
      {inputSearch === "" ? (
        <>
          <GenresList genres={genres} setGenres={setGenres} />
          <MovieList genres={genres.join(",")} />
        </>
      ) : (
        <SearchMovie query={debouncedQuery} />
      )}
    </>
  );
}

export default MoviesApp;
