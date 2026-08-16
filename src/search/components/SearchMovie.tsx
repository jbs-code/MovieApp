import { MovieTitleList } from "../../movies";
import { useSearchMovie } from "..";

interface Props {
  query: string;
}
export const SearchMovie = ({ query }: Props) => {
  const { querySearchMovie } = useSearchMovie(query);

  return <MovieTitleList queryResult={querySearchMovie} />;
};
