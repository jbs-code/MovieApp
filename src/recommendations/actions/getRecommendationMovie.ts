import type { Title } from "../../movies";
import { moviesApi } from "../../utils/api/moviesApi";

export const getRecommendationMovie = async (movieId:number, page?:number): Promise<Title> => {
  const params = new URLSearchParams();

  if (page) params.append("page", page.toString());

  // params.append("sort_by", "popularity.desc");

  const { data } = await moviesApi.get<Title>(`/movie/${movieId}/recommendations`, {
    params,
  });
  return data;
};
