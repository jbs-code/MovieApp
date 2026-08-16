//INFO: This component don't have influence in the proyect. Stay only for documentation.
import { useEffect, useState } from "react";

import { MovieTitleCard } from "./MovieTitleCard";
import { Pagination } from "../../shared";
import { useDiscoverMoviesPaginated } from "..";

interface Props {
  genres?: string;
}

export const MovieTitleListPaginated = ({ genres }: Props) => {
  const [page, setPage] = useState(1);

  const { queryMoviesDiscovered } = useDiscoverMoviesPaginated(genres, page);

  useEffect(() => {
    setPage(1);
  }, [genres]);

  if (queryMoviesDiscovered.isPending)
    return <span className="loading loading-spinner loading-xl"></span>;

  if (queryMoviesDiscovered.isError)
    return <span>Error al cargar películas</span>;

  if (!queryMoviesDiscovered.data)
    return <span>Error al cargar películas</span>;

  return (
    <div className="flex flex-col">
      <ul className="flex flex-wrap justify-center">
        {queryMoviesDiscovered.data.results.map((movie) => (
          <MovieTitleCard key={movie.id} movie={movie} />
        ))}
      </ul>
      <footer className="flex justify-center">
        <Pagination
          minPages={10}
          currentPage={page}
          totalPages={queryMoviesDiscovered.data.total_pages}
          sendCurrentPage={(page) => setPage(page)}
        />
      </footer>
    </div>
  );
};
