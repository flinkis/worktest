import "../styles/listView.scss";

import { NavLink, useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";

import { SerializedError } from "@reduxjs/toolkit";
import { useGetMoviesQuery } from "../api/moviesApi";

const MovieList = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";
  const [page, setPage] = useState(1);
  const wraperRef = useRef<HTMLDivElement>(null);

  const { data, error, isLoading } = useGetMoviesQuery(
    { searchTerm, page },
    {
      skip: !searchTerm,
    }
  );

  const loadMoreMoview = useCallback(() => {
    if (
      data?.totalResults &&
      data?.Search.length < parseInt(data.totalResults, 10)
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [data]);

  useEffect(() => {
    if (searchTerm) {
      setPage(1);
    }
  }, [searchTerm]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as SerializedError).message}</div>;
  }

  return (
    <>
      <div className="movie-container" ref={wraperRef}>
        {data?.Error && <div className="no-results">{data.Error}</div>}
        {data?.Search?.map((movie, index) => (
          <NavLink className="movie-card" to={`/${movie.imdbID}`} key={index}>
            {movie.Poster === "N/A" ? (
              <div className="no-poster">No Poster Available</div>
            ) : (
              <img src={movie.Poster} alt={movie.Title} />
            )}
            <div className="movie-text">
              {movie.Title}
              <br />
              {movie.Year}
            </div>
          </NavLink>
        ))}
      </div>

      <div className="load-wrapper">
        {data?.totalResults &&
          data?.Search.length < parseInt(data.totalResults, 10) && (
            <button className="load-more" onClick={loadMoreMoview}>
              Load More...
            </button>
          )}
      </div>

      {isLoading && <div>Loading more...</div>}
    </>
  );
};

export default MovieList;
