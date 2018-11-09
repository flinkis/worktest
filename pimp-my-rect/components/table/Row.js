import css from "../../styles/table.scss"

const Row = ({ data, index, handleLoad = () => {}, removeData = () => {} }) => {
    return (
        <tr className={ css.tableRow }>
            { Object.keys(data).map((key) => (
                <td key={ key }>{ data[key] }</td>
            )) }
            <td onClick={ handleLoad.bind(this, data) } className={ css.iconCell }>
                <svg className={ css.icon } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 0h512v512H0z"/>
                    <path d="M64 48c-9 0-16 7-16 16v384c0 9 7 16 16 16h236l-16-16H64V64h63v98c0 3 4 7 8 7h170c4 0 8-4 8-7V64h69l1 1 9 7a872 872 0 0 1 55 57l1 1v236h16V128l-1-4-1-2-3-3-8-10a878 878 0 0 0-63-60l-4-1H64zm88 16h48c5 0 8 4 8 10v70c0 6-3 10-8 10h-48c-5 0-8-4-8-10V74c0-6 3-10 8-10zm-38 148c-4 0-8 4-8 8v184c0 4 4 8 8 8h134l-30-31-16-15h77V238h127v-18c0-4-4-8-8-8H114zm183 44v128h-51l106 106 106-106h-51V256H297zm167 148l-16 16v28h-28l-16 16h44c9 0 16-7 16-16v-44z" fill="#fff"/>
                </svg>
            </td>
            <td onClick={ removeData.bind(this, index) } className={ css.iconCell }>
                <svg className={ css.icon } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 0h512v512H0z"/>
                    <path d="M199 103v50h-78v30h270v-30h-78v-50H199zm18 18h78v32h-78v-32zm-79 80l30 286h176l30-286H138zm62 13l1 9 16 224 1 9-18 2-1-9-16-224-1-9 18-2zm112 0l18 2-1 9-16 224-1 9-18-2 1-9 16-224 1-9zm-65 1h18v242h-18V215z" fill="#fff"/>
                </svg>
            </td>
        </tr>
    )
}

export default Row