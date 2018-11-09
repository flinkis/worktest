import { Fragment } from 'react'
import css from "../../styles/editor.scss"

const Slider = ({ name, value, onChange = () => {} }) => {
    const handleChange = e => onChange(e.target.value, e.target.name);

    return (
        <Fragment>
            <input className={ css.range }
                type="range"
                min="0"
                max="50"
                value={ value }
                name={ name }
                step="1"
                onChange={ handleChange }/>
            <span className={ css.value }>{ value + '%' }</span>
        </Fragment>
    )
}

export default Slider