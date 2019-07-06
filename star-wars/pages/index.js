import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import FilmList from '../components/film-list'

class Index extends React.Component {
    static getInitialProps() {
        try {
            return fetch('https://swapi.co/api/films/')
                .then(res => res.json())
                .then(data => ({ films: data.results }))
        } catch (error) {
            console.error(error.message)
            return { films: [] }
        }
    }

    render() {
        return (
            <>
                <Head>
                    <title>Star Wars</title>
                </Head>
                <FilmList films={this.props.films} />
            </>
        )
    }
}

export default Index
