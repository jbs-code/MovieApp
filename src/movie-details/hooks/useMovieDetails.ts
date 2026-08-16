import { getMovieDetails } from "../actions/getMovieDetails";
import { useQuery } from "@tanstack/react-query";

export const useMovieDetails = (movieId: number) => {
  const queryMoviesDetails = useQuery({
    queryKey: ["movies", "details", { movieId }],
    queryFn: () => getMovieDetails(movieId),
    staleTime: 1000 * 60 * 60,
  });

  return { queryMoviesDetails };
};
