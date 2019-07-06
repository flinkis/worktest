import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import Layout from '../components/layout'

export default class StarWars extends App {
    state = {
        loading: true,
    }

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    componentDidMount() {
        this.setState({ loading: false })
        Router.events.on('routeChangeStart', () =>
            this.setState({ loading: true })
        )
        Router.events.on('routeChangeComplete', () =>
            this.setState({ loading: false })
        )
        Router.events.on('routeChangeError', () =>
            this.setState({ loading: false })
        )
    }

    render() {
        const { Component, pageProps } = this.props
        const { loading } = this.state
        return (
            <Container>
                <Layout loading={loading}>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}
