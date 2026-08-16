import { getSearchMovie } from "../actions/getSearchMovie";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useSearchMovie = (query: string) => {

  const querySearchMovie = useInfiniteQuery({
    queryKey: ["movies", "search", { query }],
    queryFn: ({ pageParam }) => {
      return getSearchMovie(query, pageParam);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, _pages) =>
      lastPage.page === lastPage.total_pages ? undefined : lastPage.page + 1,
    staleTime: 1000 * 60 * 60,
  });

  return { querySearchMovie };
};
