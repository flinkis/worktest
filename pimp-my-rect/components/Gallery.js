import React from 'react'

import Table from './table/Table.js'

import css from "../styles/general.scss"

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.removeData = this.removeData.bind(this);

        this.state = {
            items: null,
        };
    }

    componentDidMount() {
        if(localStorage.getItem('items')) {
            this.getData('items', result => {
                this.setState({
                    items: result
                });
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.shouldSave) {
            this.updateData(this.props.data, 'items');
            this.props.handleSave();
        }
    }

    getData(key, callback) {
        const result = JSON.parse(localStorage.getItem(key));
        if (typeof callback === "function") {
            callback(result)
        }
    }

    setData(data, key) {
        localStorage.setItem(key, JSON.stringify(data));
        this.setState({
            items: data
        });
    }

    updateData(data, key) {
        this.getData(key, result => {
            if (result) {
                result.push(data);
            } else {
                result = [data];
            }

            this.setData(result, 'items');
        });
    }

    removeData(index) {
        this.getData('items', result => {
            result.splice(index, 1);

            this.setData(result, 'items');
        });
    }

    render() {
        const { items } = this.state;
        const { handleLoad } = this.props;

        return (
            <div className={css.gallery}>
                <Table items={ items } handleLoad={ handleLoad } removeData={ this.removeData }/>
            </div>
        )
    }
}

