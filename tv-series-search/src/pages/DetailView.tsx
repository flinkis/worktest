import './styles/DetailView.css';

import React, { useEffect, useState } from 'react';

import ErrElement from '../components/Error';
import axios from 'axios';
import { show } from '../types/show';
import { useParams } from 'react-router';

const DetailView = () => {
  let { id } = useParams<'id'>();
  const [show, setShow] = useState<show>();

  const fetchShow = async () => {
    const { data } = await axios.get<show>(
      `https://api.tvmaze.com/shows/${id}`
    );
    if (data) {
      setShow(data);
    }
  };

  useEffect(() => {
    if (id) {
      fetchShow();
    }
  }, [id]);

  useEffect(() => {
    if (show && show.image) {
      document.documentElement.style.setProperty(
        '--background-blur',
        `url(${show.image.medium})`
      );
    }
    return () => {
      document.documentElement.style.setProperty('--background-blur', ``);
    };
  }, [show]);

  return show ? (
    <div className="detailView">
      <div className="show-content">
        <img
          src={
            show.image
              ? show.image.medium
              : 'https://dummyimage.com/200x295/fff/aaa'
          }
          alt={show.name}
        />

        <div className="show-detail">
          <h2>{show.name}</h2>
          <ul className="show-tags">
            {show.genres.map(genre => (
              <li className="show-genre" key={genre}>
                {genre}
              </li>
            ))}
          </ul>
          <div
            className="show-plot"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />
          <ul className="show-info">
            {show.network ? (
              <li>
                <b>Network:</b> {show.network.name}
              </li>
            ) : null}
            {show.runtime ? (
              <li>
                <b>Runtime:</b> {show.runtime}min
              </li>
            ) : null}
            {show.rating ? (
              <li>
                <b>Rating:</b> {show.rating.average}
              </li>
            ) : null}
            {show.status ? (
              <li>
                <b>Status:</b> {show.status}
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <ErrElement />
  );
};

export default DetailView;
