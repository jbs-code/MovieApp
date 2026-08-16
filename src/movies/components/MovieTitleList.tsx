import type {
  InfiniteData,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";

import { MovieTitleCard } from "./MovieTitleCard";
import type { Title } from "..";

interface Props {
  queryResult: UseInfiniteQueryResult<InfiniteData<Title, unknown>, Error>;
}

export const MovieTitleList = ({ queryResult }: Props) => {
   
  if (queryResult.isPending)
    return <span className="loading loading-spinner loading-xl"></span>;

  if (queryResult.isError)
    return <span>Error al cargar películas</span>;

  const movies = queryResult.data?.pages.map((movies) => movies.results).flat();

  return (
    <div className="flex flex-col">
      <ul className="flex flex-wrap justify-center">
        {movies?.map((movie, index) => (
          <MovieTitleCard key={`${movie.id}${index}`.concat(movie.title)} movie={movie} />
        ))}
      </ul>
      {queryResult.hasNextPage && (
        <button
          onClick={() => queryResult.fetchNextPage()}
          disabled={queryResult.isFetchingNextPage}
          className="w-3/4 m-auto btn btn-info"
        >
          {queryResult.isFetchingNextPage ? "Loading..." : "Add more"}
        </button>
      )}
    </div>
  );
};
