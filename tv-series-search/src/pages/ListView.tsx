import './styles/ListView.css';

import React, { useEffect, useRef, useState } from 'react';
import { searchResult, show } from '../types/show';

import ErrElement from '../components/Error';
import Loading from '../components/Loading';
import Show from '../components/Show';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

interface state {
  shows: searchResult[];
  err: boolean;
  loading: boolean;
}

const ListView = () => {
  const [state, setState] = useState<Partial<state>>({ loading: false });

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
    let timer;

    if (!state.loading) {
      setState({ loading: true });
      try {
        timer = setTimeout(() => {
          throw new Error('Time out!');
        }, 3000);
        const { data } = await axios.get<searchResult[]>(
          `https://api.tvmaze.com/search/shows?q=${query}`
        );
        clearTimeout(timer);
        setState({ loading: false, shows: data });
      } catch (e) {
        clearTimeout(timer);
        setState({ loading: false, err: true });
      }
    }
  };

  if (state.loading) {
    return <Loading />;
  } else if (state.err) {
    return <ErrElement />;
  }

  return (
    <div className="shows_container">
      {state.shows &&
        state.shows.map(({ show }: { show: show }) => (
          <Show key={show.id} {...show} />
        ))}
    </div>
  );
};

export default ListView;
