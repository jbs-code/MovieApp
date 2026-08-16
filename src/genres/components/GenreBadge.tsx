import type { GenreElement } from "..";
import { motion } from "motion/react";

interface Props {
  genre: GenreElement;
  onGenreSelected: (genreId: number) => void;
  genresSelected: number[];
}

export const GenreBadge = ({
  genre,
  onGenreSelected,
  genresSelected,
}: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{type: 'spring'}}
      onClick={() => onGenreSelected(genre.id)}
      className={`badge badge-lg badge-info cursor-pointer ${!genresSelected.includes(genre.id) ? "badge-soft" : ""}`}
    >
      {genre.name}
    </motion.div>
  );
};
