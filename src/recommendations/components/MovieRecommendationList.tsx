import { MovieTitleList } from "../../movies";
import { useParams } from "react-router";
import { useRecommendationMovie } from "..";

export const MovieRecommendationList = () => {
  const { movieId } = useParams();

  const { queryRecommendationsMovies } = useRecommendationMovie(+movieId!);

  return (
    <div className="mt-5">
      <h3 className="card-title">Recommendations</h3>
      <MovieTitleList queryResult={queryRecommendationsMovies} />
    </div>
  );
};
