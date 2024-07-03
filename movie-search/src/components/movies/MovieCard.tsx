import "../../styles/movieCard.scss";

import { Link } from "react-router-dom";

interface MovieCardProps {
  id: string;
  title: string;
  year: string;
  poster: string;
}

const MovieCard = ({ id, title, year, poster }: MovieCardProps) => {
  return (
    <article className="movie-card">
      <Link to={`/movie/${id}`} aria-label={`View details for ${title}`}>
        <div className="movie-card-image">
          {poster && poster !== "N/A" ? (
            <img src={poster} alt={`${title} poster`} />
          ) : (
            <div
              className="movie-card-no-image"
              aria-label="No poster available"
            >
              No Image Available
            </div>
          )}
        </div>
        <div className="movie-card-info">
          <h2 className="movie-card-title">{title}</h2>
          <p className="movie-card-year">{year}</p>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
