import { getRecommendationMovie } from "../actions/getRecommendationMovie";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useRecommendationMovie = (movieId: number) => {

  const queryRecommendationsMovies = useInfiniteQuery({
    queryKey: ["movies", "details", "recommendations", { movieId }],
    queryFn: ({ pageParam }) => {
      return getRecommendationMovie(movieId, pageParam);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, _pages) =>
      lastPage.page === lastPage.total_pages ? undefined : lastPage.page + 1,
    staleTime: 1000 * 60 * 60,
  });

  return { queryRecommendationsMovies };
};
