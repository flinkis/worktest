import './style.css';

import React, { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      setSearchParams({ q: query });
    } else {
      navigate(`/?q=${query}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="search"
        id="series-search"
        name="q"
        value={query}
        placeholder="Search for a series"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
