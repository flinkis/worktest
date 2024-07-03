import "../styles/movieDetailPage.scss";

import { useParams, useNavigate } from "react-router-dom";
import MovieDetail from "../components/movies/MovieDetail";
import ErrorBoundary from "../components/common/ErrorBoundary";

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return <div>Error: No movie ID provided</div>;
  }

  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <ErrorBoundary
        fallback={<div>There was an error loading the movie details.</div>}
      >
        <MovieDetail movieId={id} />
      </ErrorBoundary>
    </>
  );
};

export default MovieDetailPage;
