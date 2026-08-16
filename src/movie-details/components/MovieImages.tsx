import { useMovieImages } from "../hooks/useMovieImages";
import { useParams } from "react-router";

export const MovieImages = () => {
  const { movieId } = useParams();
  const { queryMoviesImages } = useMovieImages(+movieId!);

  if (queryMoviesImages.isFetching) return <span className="loading loading-spinner loading-xl"></span>;

  return (
    <div className="mt-4">
      <h3 className="card-title">Backdrops</h3>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {queryMoviesImages.data?.backdrops.slice(0, 12).map((image, index) => (
          /* break-inside-avoid: Evita que una imagen se parta a la mitad entre dos columnas */
          <div key={index} className="break-inside-avoid mb-4">
            <img
              className="h-auto max-w-full rounded-base"
              src={`${import.meta.env.VITE_BASE_IMAGE_URL}${image.file_path}`}
              alt={"Image file"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
