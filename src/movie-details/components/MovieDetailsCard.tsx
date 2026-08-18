import type { IMovieDetails } from "../interfaces/movie-details";
import { ProductionCompanies } from "./ProductionCompanies";

interface Props {
  movie: IMovieDetails;
}
export const MovieDetailsCard = ({ movie }: Props) => {
  return (
    <div className="md:w-3xl xl:w-4xl m-auto">
      <div className="card md:card-side bg-base-100 shadow-sm items-center">
        <figure>
          <img
            src={`${import.meta.env.VITE_BASE_IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title">{movie.title}</h2>
          <div>
            <h3 className="card-title text-[16px]">Overview</h3>
            <p className="text-start ml-3">{movie.overview}</p>
          </div>
          <div>
            <h3 className="card-title text-[16px]">Genres</h3>
            <ul className="flex flex-wrap gap-1 ml-3">
              {movie.genres.map((genre) => (
                <div key={genre.id} className="badge badge-accent">
                  {genre.name}
                </div>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="card-title text-[16px]">Production Companies</h3>
            <ul className="flex flex-wrap gap-1 ml-3 items-center">
              {movie.production_companies.map((companie) => (
                <ProductionCompanies key={companie.id} companie={companie} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="card-title text-[16px]">Vote</h3>
            <p className="w-fit ml-3">{movie.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
