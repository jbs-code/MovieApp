import type { FC } from "react";
import type { Movie } from "..";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

interface Props {
  movie: Movie;
}
export const MovieTitleCard: FC<Props> = ({ movie }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/movies/details/${movie.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card bg-base-100 w-75 shadow-sm"
    >
      <figure className="px-10 pt-10">
        <motion.img
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.9, y: 1 }}
          transition={{ type: "keyframes" }}
          onClick={onClick}
          src={`${import.meta.env.VITE_BASE_IMAGE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="rounded-xl cursor-pointer"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{movie.title}</h2>
        <p>{movie.overview.slice(0, 100)}...</p>
      </div>
    </motion.div>
  );
};
