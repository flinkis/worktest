// src/components/movies/MovieList.tsx

import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../api/moviesApi";
import { RootState } from "../../store/rootReducer";
import MovieCard from "./MovieCard";
import SkeletonCard from "../common/SkeletonCard";
import ErrorBoundary from "../common/ErrorBoundary";
import "../../styles/movieList.scss";

const MovieListContent = () => {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isFetching } = useGetMoviesQuery(
    { searchTerm, page },
    { skip: !searchTerm }
  );

  if (error) throw error;

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const hasMore = data?.totalResults
    ? parseInt(data.totalResults) > page * 10
    : false;

  const renderMovieCards = () => {
    if (isLoading) {
      return Array(10)
        .fill(null)
        .map((_, index) => <SkeletonCard key={index} />);
    }

    if (!data || !data.Search) return <p>No movies found.</p>;

    return data.Search.map((movie) => (
      <MovieCard
        key={`${movie.imdbID}-${page}`}
        id={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
      />
    ));
  };

  return (
    <section className="movie-list-container" aria-label="Movie search results">
      <div className="movie-list" role="list">
        {renderMovieCards()}
      </div>
      {hasMore && (
        <div className="load-more-container">
          <button onClick={loadMore} disabled={isFetching}>
            {isFetching ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
};

const MovieList = () => (
  <ErrorBoundary
    fallback={
      <div role="alert">Something went wrong while loading movies.</div>
    }
  >
    <MovieListContent />
  </ErrorBoundary>
);

export default MovieList;
