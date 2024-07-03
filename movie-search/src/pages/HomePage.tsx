import "../styles/homePage.scss";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/movies/MovieList";
import { RootState } from "../store/rootReducer";
import { setSearchTerm } from "../store/slices/searchSlice";
import { ErrorBoundary } from "react-error-boundary";
import SearchForm from "../components/search/SearchForm";

const HomePage = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const querySearchTerm = searchParams.get("q");
    if (querySearchTerm && querySearchTerm !== searchTerm) {
      dispatch(setSearchTerm(querySearchTerm));
    }
  }, [searchParams, dispatch, searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      setSearchParams({ q: searchTerm });
    } else {
      setSearchParams({});
    }
  }, [searchTerm, setSearchParams]);

  return (
    <>
      <section className="hero">
        <h1>Welcome to Movie Search</h1>
        <p>Discover information about your favorite movies</p>
      </section>
      {searchTerm ? (
        <section className="movie-results">
          <h2> {`Search Results for "${searchTerm}"`}</h2>
          <ErrorBoundary
            fallback={<div>Something went wrong while loading movies.</div>}
          >
            <MovieList />
          </ErrorBoundary>
        </section>
      ) : (
        <div className="search-container">
          <SearchForm />
        </div>
      )}
    </>
  );
};

export default HomePage;
