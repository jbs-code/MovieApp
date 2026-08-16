import { getMovieGenres } from "..";
import { useQuery } from "@tanstack/react-query";

export const useGenres = () => {
  const queryGenres = useQuery({
    queryKey: ["genres"],
    queryFn: getMovieGenres,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {queryGenres};
};
