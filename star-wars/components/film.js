import Link from 'next/link'
import css from '../styles/general.scss'

const Film = ({ film }) => (
    <Link href={`/episode/?url=${film.url}`} as={`/episode/${film.episode_id}`}>
        <button className={css.film}>
            <h2>{film.title}</h2>
            <h3>{film.release_date}</h3>
            <h3>
                Directed by:
                <br />
                {film.director}
            </h3>
        </button>
    </Link>
)

export default Film
