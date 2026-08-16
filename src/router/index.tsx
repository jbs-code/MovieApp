import { Navigate, createBrowserRouter } from "react-router";

import { MainLayout } from "../layouts/MainLayout";
import { MovieDetails } from "../movie-details";
import MoviesApp from "../MoviesApp";

export const router = createBrowserRouter([
  {
    path: "/movies",
    Component: MainLayout,
    children: [
      {
        index: true,
        // element: <MovieDetails/>
        Component: MoviesApp,
      },
      {
        path: "details/:movieId",
        Component: MovieDetails,
      },
    ],
    errorElement: <Navigate to="movies" />,
  },
]);
