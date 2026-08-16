import { MovieTitleList, useDiscoverMovies } from "..";

interface Props {
  genres?: string;
}

export const MovieList = ({ genres }: Props) => {
  const { queryMoviesDiscovered } = useDiscoverMovies(genres);
 
  return <MovieTitleList queryResult={queryMoviesDiscovered} />;
};
