import React from 'react'

import Table from './table/Table.js'

import css from "../styles/general.scss"

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.removeData = this.removeData.bind(this);
        this.sortData = this.sortData.bind(this);

        this.state = {
            items: null,
            sortKey: null,
            sortOrderAsc: true
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

    sortData(key, desc) {
        const { items, sortOrderAsc } = this.state;
        let asc = true;

        function compare(a, b) {
            const type = (typeof(a[key]) === 'string' || typeof(b[key]) === 'string') ? 'string' : 'number';

            if (type === 'string') {
                return a[key].localeCompare(b[key]);   
            } else {
                return a[key] - b[key];
            }
        }

        items.sort(compare);

        if (sortOrderAsc) {
            asc = false;
            items.reverse();
        } 

        this.setData(items, 'items');

        this.setState({ 
            sortOrderAsc: asc, 
            sortKey: key 
        });
    }

    render() {
        const { items } = this.state;
        const { handleLoad } = this.props;
        const hasItems = (items && items.length > 0);

        return (
            <div className={ css.gallery }>
                { hasItems && <Table { ...this.state } handleLoad={ handleLoad } removeData={ this.removeData } sortData={ this.sortData } /> }
                { !hasItems && <h3>There are no saved elements, please come again...</h3> }
            </div>
        )
    }
}

