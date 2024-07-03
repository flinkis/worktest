import "../../styles/movieDetail.scss";

import { useGetMovieByIdQuery } from "../../api/moviesApi";
import Loading from "../common/Loading";

interface MovieDetailProps {
  movieId: string;
}

const MovieDetail = ({ movieId }: MovieDetailProps) => {
  const { data: movie, isLoading, error } = useGetMovieByIdQuery(movieId);

  if (isLoading) return <Loading message="Fetching movie details..." />;
  if (error) throw error;
  if (!movie) return <div>No movie found.</div>;

  return (
    <>
      <div className="movie-detail-header">
        <h1>{movie.Title}</h1>
        <div className="movie-meta">
          <span>{movie.Year}</span>
          <span>{movie.Rated}</span>
          <span>{movie.Runtime}</span>
        </div>
      </div>
      <div className="movie-detail-content">
        <div className="movie-poster">
          {movie.Poster !== "N/A" ? (
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
          ) : (
            <div className="no-poster">No Poster Available</div>
          )}
        </div>
        <div className="movie-info">
          <p className="movie-plot">{movie.Plot}</p>
          <div className="movie-credits">
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Writers:</strong> {movie.Writer}
            </p>
            <p>
              <strong>Stars:</strong> {movie.Actors}
            </p>
          </div>
          <div className="movie-details">
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Released:</strong> {movie.Released}
            </p>
            <p>
              <strong>Box Office:</strong> {movie.BoxOffice}
            </p>
            <p>
              <strong>Awards:</strong> {movie.Awards}
            </p>
          </div>
          {movie.Ratings && movie.Ratings.length > 0 && (
            <div className="movie-ratings">
              <h3>Ratings</h3>
              {movie.Ratings.map((rating, index) => (
                <div key={index} className="rating">
                  <span className="rating-source">{rating.Source}</span>
                  <span className="rating-value">{rating.Value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
