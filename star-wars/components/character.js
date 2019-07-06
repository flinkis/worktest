import Link from 'next/link'
import css from '../styles/general.scss'
const getEpisodId = url => {
    const urls = [
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/7/',
    ]

    return urls.indexOf(url) + 1
}
const Character = ({ character, number }) => (
    <div className={css.character}>
        <h4 className={css.character__header}>{character.name}</h4>
        <div className={css.character__number}>{number}</div>
        <p>
            <strong>Gender:</strong>
            {character.gender}
        </p>
        <p>
            <strong>Hair color:</strong>
            {character.hair_color}
        </p>
        <p>
            <strong>Height:</strong>
            {character.height}cm
        </p>
        <p>
            <strong>Weight:</strong>
            {character.mass}kg
        </p>
        <p>
            <strong>Skin color:</strong>
            {character.skin_color}
        </p>
        <p>
            <strong>Eye color:</strong>
            {character.eye_color}
        </p>
        <p>
            <strong>Birth year:</strong>
            {character.birth_year}
        </p>
        <p>
            <strong>Appears in other movies</strong>
            <br />
            {character.films.map(url => (
                <Link key={url} href={`/episode/${getEpisodId(url)}`}>
                    <a title="go to episode">
                        <svg
                            className={css.character__link}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M501 192H32c-6 0-11 5-11 10v256c0 30 24 54 53 54h384c30 0 54-24 54-54V202c0-5-5-10-11-10zm-11 266c0 18-14 32-32 32H74c-17 0-32-14-32-32V213h448v245z" />
                            <path d="M511 93l-18-69c-4-17-21-27-38-23L25 103a32 32 0 0 0-24 39l20 79a11 11 0 0 0 13 8c6-2 9-7 8-13l-1-5 462-105a11 11 0 0 0 8-13zM36 191l-14-54a11 11 0 0 1 8-13L460 22l2-1c5 0 9 4 10 9l16 58L36 191z" />
                            <path d="M122 193c-6-3-12-1-15 5l-42 85a11 11 0 0 0 19 10l42-86c3-5 1-11-4-14zM228 193c-5-3-11-1-14 5l-43 85a11 11 0 0 0 19 10l43-86c3-5 1-11-5-14zM335 193c-5-3-12-1-14 5l-43 85a11 11 0 0 0 19 10l43-86c2-5 0-11-5-14zM442 193c-6-3-12-1-15 5l-42 85a11 11 0 0 0 19 10l42-86c3-5 1-11-4-14z" />
                            <path d="M501 277H32a11 11 0 0 0 0 21h469a11 11 0 1 0 0-21zM135 173l-74-73a11 11 0 0 0-15 15l74 73a11 11 0 0 0 15 0c4-4 4-11 0-15zM239 149l-73-73a11 11 0 0 0-16 15l74 74a11 11 0 0 0 15 0c4-5 4-11 0-16zM343 126l-73-74a11 11 0 0 0-15 15l73 74c2 2 5 3 8 3s5-1 7-3c5-4 5-11 0-15zM448 102l-74-73a11 11 0 0 0-15 15l74 73c2 2 4 3 7 3s6-1 8-3c4-4 4-11 0-15z" />
                        </svg>
                    </a>
                </Link>
            ))}
        </p>
    </div>
)
export default Character
