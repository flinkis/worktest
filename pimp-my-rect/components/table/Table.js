import css from "../../styles/table.scss"

import Row from './Row.js'

const Table = ({ items = [], handleLoad = () => {}, removeData = () => {} }) => {
    return (
        <table className={ css.table }>
            <thead className={ css.tableHeader }>
                <tr>
                    { items && Object.keys(items[0]).map((key) => (<td key={ key } className={ css.filterLink } >{ key }</td>)) }
                    <td colspan="2"></td>
                </tr>
            </thead>
            <tbody>
                { items && items.map((item, index) => ( <Row key={ index } data={ item } index={ index } handleLoad={ handleLoad } removeData={ removeData }/> )) }
            </tbody>
        </table>
    )
}

export default Table