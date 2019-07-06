import React from 'react'
import css from '../styles/general.scss'
import Film from './film'

const sortByDate = (filmA, filmB) => {
    return Date.parse(filmA.release_date) - Date.parse(filmB.release_date)
}

const FilmList = ({ films }) => (
    <div className={css.films}>
        {films.sort(sortByDate).map(film => (
            <Film key={film.episode_id} film={film} />
        ))}
    </div>
)

export default FilmList
