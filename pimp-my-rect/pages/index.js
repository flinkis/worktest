import React, { Fragment } from 'react'
import Head from 'next/head'

import Output from '../components/Output'
import Editor from '../components/Editor'
import Gallery from '../components/Gallery'

import css from "../styles/general.scss"

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.setData = this.setData.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onLoad = this.onLoad.bind(this);

        this.state = { 
            data: { 
                height: '100',
                width: '100',
                color: '#B80000',
                radius: '0'
            },
            save: false
        };
    }

    setData(value, title) {
        const { data } = this.state;
        this.setState({ data: {...data, [title]: value }});
    }

    onSave() {
        this.setState({
            save: !this.state.save
        })
    }

    onLoad(data) {
        this.setState({ data });
    }

    render() {
        const { data, save } = this.state;

        return (
            <Fragment>
                <Head>
                    <title>Pimp-My-React</title>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:300|Roboto+Slab" rel="stylesheet" />
                </Head>

                <header  className={css.header}>
                    <h1>Pimp-My-React</h1>
                    <h4>_a simple JS application_</h4>
                </header>
                <div className={css.wrapper}>
                    <Output {...data} />
                    <Editor {...data} handleChange={ this.setData } handleSave={ this.onSave } />
                    <Gallery handleLoad={ this.onLoad } handleSave={ this.onSave } shouldSave={ save } data={ data } />
                </div>
            </Fragment>
        )
    }
}