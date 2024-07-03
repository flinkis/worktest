import "../../styles/searchForm.scss";

import { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/slices/searchSlice";
import { RootState } from "../../store/rootReducer";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentSearchTerm = useSelector(
    (state: RootState) => state.search.searchTerm
  );
  const [localSearchTerm, setLocalSearchTerm] = useState(currentSearchTerm);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchTerm(localSearchTerm));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} role="search">
      <label htmlFor="search-input" className="visually-hidden">
        Search for movies
      </label>
      <input
        id="search-input"
        type="search"
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        placeholder="Search for movies..."
        className="search-input"
        aria-label="Search for movies"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
