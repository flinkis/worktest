import './styles/ListView.css';

import React, { useEffect, useState } from 'react';

import ErrElement from '../components/Error';
import Show from '../components/Show';
import axios from 'axios';
import { searchResult } from '../types/show';
import { useSearchParams } from 'react-router-dom';

const ListView = () => {
  const [shows, setShows] = useState<searchResult[]>([]);
  const [err, setErr] = useState<boolean>();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      fetchSearch(query);
    } else {
      fetchSearch('a');
    }
  }, [query]);

  const fetchSearch = async (query = '') => {
    try {
      const { data } = await axios.get<searchResult[]>(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
      setShows(data);
    } catch (e) {
      setErr(true);
    }
  };

  return !err ? (
    <div className="shows_container">
      {shows.map(({ show }) => (
        <Show key={show.id} {...show} />
      ))}
    </div>
  ) : (
    <ErrElement />
  );
};

export default ListView;
