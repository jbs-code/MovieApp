import type { IMovieImages } from "..";
import { moviesApi } from "../../utils/api/moviesApi";

export const getMovieImages = async (movieId: number): Promise<IMovieImages> => {
  const params = new URLSearchParams();
  params.append("language", "en-US");

  const { data } = await moviesApi.get<IMovieImages>(
    `/movie/${movieId}/images`,
    {
      params,
    },
  );
  return data;
};
