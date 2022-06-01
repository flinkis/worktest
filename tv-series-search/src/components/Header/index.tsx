import './style.css';

import React from 'react';
import SearchForm from '../SearchForm';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1
        onClick={() => {
          navigate('/');
        }}
      >
        Tv Series Search
      </h1>
      <SearchForm />
    </div>
  );
};

export default Header;
