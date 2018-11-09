import css from "../../styles/table.scss"

import Row from './Row.js'

const Table = ({ items, sortKey, sortOrderAsc, handleLoad = () => {}, removeData = () => {}, sortData = () => {} }) => (
    <table className={ css.table }>
        <thead className={ css.tableHeader }>
            <tr>
                { Object.keys(items[0]).map((key) => {
                    const activeClass = sortKey === key ? sortOrderAsc ? css.asc : css.desc : '';
                    return <td key={ key } className={ css.filterLink + ' ' + activeClass } onClick={ sortData.bind(this, key) }>{ key }</td>
                }) }
                <td colSpan="2"></td>
            </tr>
        </thead>
        
        <tbody>
            { items.map((item, index) => ( <Row key={ index } data={ item } index={ index } handleLoad={ handleLoad } removeData={ removeData }/> )) }
        </tbody>
    </table>
)

export default Table