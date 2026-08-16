import { getDiscoverMovie } from "..";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useDiscoverMovies = (genre?: string) => {
  // const queryMoviesDiscovered = useQuery({
  //   queryKey: ["movies", { genre }],
  //   queryFn: () => getDiscoverMovie(genre),
  //   staleTime: 1000 * 60 * 60,
  // });

  const queryMoviesDiscovered = useInfiniteQuery({
    queryKey: ["movies", { genre }],
    queryFn: ({ pageParam }) => {
      return getDiscoverMovie(genre, pageParam);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, _pages) =>
      lastPage.page === lastPage.total_pages ? undefined : lastPage.page + 1,
    staleTime: 1000 * 60 * 60,
  });

  return { queryMoviesDiscovered };
};
