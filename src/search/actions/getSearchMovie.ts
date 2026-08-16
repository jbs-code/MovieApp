import type { Title } from "../../movies";
import { moviesApi } from "../../utils/api/moviesApi";

export const getSearchMovie = async (
  query: string,
  page?: number,
): Promise<Title> => {
  const params = new URLSearchParams();

  if (page) params.append("page", page.toString());
  params.append("query", query);

  const { data } = await moviesApi.get<Title>("/search/movie", {
    params,
  });
  return data;
};
