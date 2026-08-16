//INFO: This hook don't have influence in the proyect. Stay only for documentation.

import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getDiscoverMovie } from "..";

export const useDiscoverMoviesPaginated = (genre?: string, page?: number) => {
  const queryMoviesDiscovered = useQuery({
    queryKey: ["movies", { genre, page }],
    queryFn: () => getDiscoverMovie(genre, page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 60,
  });

  return { queryMoviesDiscovered };
};
