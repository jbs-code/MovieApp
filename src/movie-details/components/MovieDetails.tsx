import { Navigate, useParams } from "react-router";

import { MovieImages } from "./MovieImages";
import { ProductionCompanies } from "./ProductionCompanies";
import { useMovieDetails } from "../hooks/useMovieDetails";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const { queryMoviesDetails } = useMovieDetails(+movieId!);

  if (queryMoviesDetails.isFetching) return <span className="loading loading-spinner loading-xl"></span>;
  if (!queryMoviesDetails.data) return <Navigate to="/movies" />;

  return (
    <div className="md:w-3xl xl:w-4xl m-auto">
      <div className="card md:card-side bg-base-100 shadow-sm items-center">
        <figure>
          <img
            src={`${import.meta.env.VITE_BASE_IMAGE_URL}${queryMoviesDetails.data.poster_path}`}
            alt={queryMoviesDetails.data.title}
          />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title">{queryMoviesDetails.data.title}</h2>
          <div>
            <h3 className="card-title text-[16px]">Overview</h3>
            <p className="text-start ml-3">{queryMoviesDetails.data.overview}</p>
          </div>
          <div>
            <h3 className="card-title text-[16px]">Genres</h3>
            <ul className="flex flex-wrap gap-1 ml-3">
              {queryMoviesDetails.data.genres.map((genre) => (
                <div key={genre.id} className="badge badge-accent">{genre.name}</div>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="card-title text-[16px]">Production Companies</h3>
            <ul className="flex flex-wrap gap-1 ml-3 items-center">
              {queryMoviesDetails.data.production_companies.map((companie) => (
                <ProductionCompanies key={companie.id} companie={companie}/>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="card-title text-[16px]">Vote</h3>
            <p className="w-fit ml-3">{queryMoviesDetails.data.vote_average}</p>
          </div>
        </div>
      </div>
      <MovieImages/>
    </div>
  );
};
