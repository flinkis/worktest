import './styles/DetailView.css';

import React, { useEffect, useState } from 'react';

import ErrElement from '../components/Error';
import Loading from '../components/Loading';
import axios from 'axios';
import { show } from '../types/show';
import { useParams } from 'react-router';

interface state {
  show: show;
  err: boolean;
  loading: boolean;
}

const DetailView = () => {
  let { id } = useParams<'id'>();
  const [state, setState] = useState<Partial<state>>({ loading: false });

  const fetchShow = async () => {
    let timer;

    if (!state.loading) {
      setState({ loading: true });
      try {
        timer = setTimeout(() => {
          throw new Error('Time out!');
        }, 3000);
        const { data } = await axios.get<show>(
          `https://api.tvmaze.com/shows/${id}`
        );
        clearTimeout(timer);
        setState({ loading: false, show: data });
      } catch (e) {
        clearTimeout(timer);
        setState({ loading: false, err: true });
      }
    }
  };

  useEffect(() => {
    if (id) {
      fetchShow();
    }
  }, [id]);

  useEffect(() => {
    if (state.show && state.show.image) {
      document.documentElement.style.setProperty(
        '--background-blur',
        `url(${state.show.image.medium})`
      );
    }
    return () => {
      document.documentElement.style.setProperty('--background-blur', ``);
    };
  }, [state.show]);

  if (state.loading) {
    return <Loading />;
  } else if (state.err) {
    return <ErrElement />;
  }

  return state.show ? (
    <div className="detailView">
      <div className="show-content">
        <img
          src={
            state.show.image
              ? state.show.image.medium
              : 'https://dummyimage.com/200x295/fff/aaa'
          }
          alt={state.show.name}
        />

        <div className="show-detail">
          <h2>{state.show.name}</h2>
          <ul className="show-tags">
            {state.show.genres.map(genre => (
              <li className="show-genre" key={genre}>
                {genre}
              </li>
            ))}
          </ul>
          <div
            className="show-plot"
            dangerouslySetInnerHTML={{ __html: state.show.summary }}
          />
          <ul className="show-info">
            {state.show.network ? (
              <li>
                <b>Network:</b> {state.show.network.name}
              </li>
            ) : null}
            {state.show.runtime ? (
              <li>
                <b>Runtime:</b> {state.show.runtime}min
              </li>
            ) : null}
            {state.show.rating ? (
              <li>
                <b>Rating:</b> {state.show.rating.average}
              </li>
            ) : null}
            {state.show.status ? (
              <li>
                <b>Status:</b> {state.show.status}
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default DetailView;
