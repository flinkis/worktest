import './style.css';

import { Link } from 'react-router-dom';
import React from 'react';
import { show } from '../../types/show';

const Show = ({ id, image, name, genres }: show) => (
  <Link to={`/${id}`} className="show">
    <img
      className="poster"
      src={image ? image.medium : 'https://dummyimage.com/200x295/fff/aaa'}
      alt={name}
      width="200"
      height="295"
    />
    <b className="title">{name}</b>
    <span className="subTitle">
      {genres.map(genre => (
        <span key={genre}>{genre}</span>
      ))}
    </span>
  </Link>
);

export default Show;
