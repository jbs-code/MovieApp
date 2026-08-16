import type { Title } from "..";
import { moviesApi } from "../../utils/api/moviesApi";

export const getDiscoverMovie = async (genre?: string, page?:number): Promise<Title> => {
  const params = new URLSearchParams();

  if (genre) params.append("with_genres", genre);
  if (page) params.append("page", page.toString());

  params.append("sort_by", "popularity.desc");

  const { data } = await moviesApi.get<Title>("/discover/movie", {
    params,
  });
  return data;
};
