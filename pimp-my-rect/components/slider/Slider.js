import css from "../../styles/editor.scss"

const Slider = ({ value, title, onChange = () => {} }) => {
    const handleChange = e => onChange(e.target.value, e.target.name)

    return (
        <div className={ css.slider }>
            <input type="range" 
                min="0" 
                max="50" 
                value={ value }
                name={ title }
                step="1" 
                onChange={ handleChange }/>
            <span className={ css.value }>{ value + '%' }</span>
        </div>
    )
}

export default Slider