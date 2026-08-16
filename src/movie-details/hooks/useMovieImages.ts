import { getMovieImages } from "../actions/getMovieImages";
import { useQuery } from "@tanstack/react-query";

export const useMovieImages = (movieId: number) => {
  const queryMoviesImages = useQuery({
    queryKey: ["movies", "details", "images", { movieId }],
    queryFn: () => getMovieImages(movieId),
    staleTime: 1000 * 60 * 60,
  });

  return { queryMoviesImages };
};
