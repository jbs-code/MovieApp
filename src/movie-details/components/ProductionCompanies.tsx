import type { ProductionCompany } from "../interfaces/movie-details";

interface Props {
  companie: ProductionCompany;
}
export const ProductionCompanies = ({ companie }: Props) => {
  return (
    <div className="card card-xs w-25 bg-white text-black p-2 shadow-sm">
      <figure>
        <img
          src={`${import.meta.env.VITE_BASE_IMAGE_URL}${companie.logo_path}`}
          alt={companie.name}
        />
      </figure>
    </div>
  );
};
