import Slider from './slider/Slider.js'
import ColorPicker from './colorpicker/ColorPicker.js'

import css from "../styles/editor.scss"

const Editor = ({ color, width, height, radius, handleChange = () => {}, handleSave = () => {} }) => {
    const onChange = e => handleChange(e.target.value, e.target.name);

    return (
        <div className={ css.editor }>
            <div className={ css.column }>
                <ColorPicker value={ color } handleChange={ handleChange }/>
            </div>

            <div className={ css.column }>
                <label className={ css.label }>Width</label>
                <input className={ css.input } type="number" name="width" value={ width } onChange={ onChange }/>
                
                <label className={ css.label }>Height</label>
                <input className={ css.input } type="number" name="height" value={ height } onChange={ onChange }/>
                
                <label className={ css.label }>Border Radius</label>
                <Slider name="radius" value={ radius } onChange={ handleChange }/>
            </div>

            <div className={ css.columnTwo }>
                <button type="button" className={ css.button } onClick={ handleSave }>Save</button>
            </div>
        </div>
    )
}

export default Editor