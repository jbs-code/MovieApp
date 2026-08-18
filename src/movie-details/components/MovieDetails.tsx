import { Navigate, useParams } from "react-router";

import { MovieDetailsCard } from "./MovieDetailsCard";
// import { MovieImages } from "./MovieImages";
import { MovieRecommendationList } from "../../recommendations";
import { useMovieDetails } from "../hooks/useMovieDetails";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const { queryMoviesDetails } = useMovieDetails(+movieId!);

  if (queryMoviesDetails.isFetching)
    return <span className="loading loading-spinner loading-xl"></span>;
  if (!queryMoviesDetails.data) return <Navigate to="/movies" />;

  return (
    <div>
      <MovieDetailsCard movie={queryMoviesDetails.data} />
      {/* <MovieImages /> */}
      <MovieRecommendationList />
    </div>
  );
};
