import type { IMovieDetails } from "../interfaces/movie-details";
import { moviesApi } from "../../utils/api/moviesApi";

export const getMovieDetails = async (
  movieId: number,
): Promise<IMovieDetails> => {
  const params = new URLSearchParams();
  params.append("language", "en-US");

  const { data } = await moviesApi.get<IMovieDetails>(`/movie/${movieId}`, {
    params,
  });
  return data;
};
