import "../styles/detailView.scss";
import "../styles/loading.scss";

import { useNavigate, useParams } from "react-router-dom";

import { SerializedError } from "@reduxjs/toolkit";
import { useGetMovieByIdQuery } from "../api/moviesApi";

const MovieDetail = () => {
  const { imdbId } = useParams<{ imdbId: string }>();
  const { data: movie, error, isLoading } = useGetMovieByIdQuery(imdbId);

  const navigate = useNavigate();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as SerializedError).message}</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="movie-detail">
        <div className="movie-poster">
          {movie.Poster === "N/A" ? (
            <div className="no-poster">No Poster Available</div>
          ) : (
            <img src={movie.Poster} alt={movie.Title} />
          )}
        </div>
        <div className="movie-info">
          <h2 className="movie-title">{movie.Title}</h2>
          <div className="movie-info-item">
            <strong>Plot:</strong> {movie.Plot}
          </div>
          <div className="movie-info-item">
            <strong>Year:</strong> {movie.Year}
          </div>
          <div className="movie-info-item">
            <strong>Director:</strong> {movie.Director}
          </div>
          <div className="movie-info-item">
            <strong>Actors:</strong> {movie.Actors}
          </div>
          <div className="movie-info-item">
            <strong>Genre:</strong> {movie.Genre}
          </div>
          <div className="movie-info-item">
            {movie.Ratings.map((rating, index) => (
              <div key={index}>
                <strong>{rating.Source}:</strong> {rating.Value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
