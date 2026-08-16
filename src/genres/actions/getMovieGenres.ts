import type { Genres } from "..";
import { moviesApi } from "../../utils/api/moviesApi";

export const getMovieGenres = async (): Promise<Genres> => {
  const { data } = await moviesApi.get<Genres>("/genre/movie/list");
  return data;
};
