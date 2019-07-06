import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import css from '../styles/general.scss'
import CharacterList from '../components/character-list'

class Film extends React.Component {
    static async getInitialProps({ query }) {
        try {
            const res1 = await fetch(query.url)
            const film = await res1.json()
            const cast = await Promise.all(
                [...new Set(film.characters)].map(path =>
                    fetch(path).then(res => res.json())
                )
            )
            return { film, cast }
        } catch (error) {
            console.error(error.message)
            return { film: {}, cast: [] }
        }
    }

    render() {
        const { film, cast } = this.props

        return (
            <>
                <Head>
                    <title>{film.title}</title>
                </Head>
                <Link href="/">
                    <a title="back to home">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 25 25"
                            className={css.goback}
                        >
                            <path
                                fill="#1a1a1a"
                                stroke="none"
                                d="M2 10a8 8 0 0 0 1 4 8 8 0 1 0-1-4zm3 0l4-4h2L8 9h7v2H8l3 3H9zm-5 0a10 10 0 0 1 1-5 10 10 0 0 1 9-5 10 10 0 0 1 5 1 10 10 0 0 1 5 12 10 10 0 0 1-5 6 10 10 0 0 1-5 1 10 10 0 0 1-5-1 10 10 0 0 1-5-9z"
                            />
                        </svg>
                    </a>
                </Link>
                <h2 className={css.title}>{film.title}</h2>
                <CharacterList characters={cast} />
            </>
        )
    }
}

export default Film
