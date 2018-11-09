import css from "../../styles/color.scss"

const ColorHeader = ({ value }) => (
    <div style={ { backgroundColor: value } } className={ css.colorHeader }>
        <h3>{ value }</h3>
    </div>
)

export default ColorHeader