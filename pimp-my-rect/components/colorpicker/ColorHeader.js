import css from "../../styles/color.scss"

const ColorHeader = ({ selected }) => (
    <div style={ { backgroundColor: selected } } className={ css.colorHeader }>
        <h3>{ selected }</h3>
    </div>
)

export default ColorHeader