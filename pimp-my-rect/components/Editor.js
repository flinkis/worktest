import Slider from './slider/Slider.js'
import ColorPicker from './colorpicker/ColorPicker.js'

import css from "../styles/editor.scss"

const Editor = ({ color, width, height, radius, handleChange = () => {}, handleSave = () => {} }) => {
    const onChange = e => handleChange(e.target.value, e.target.name, e)

    return (
        <div className={ css.editor }>
            <div className={ css.column }>
                <ColorPicker value={ color } handleChange={handleChange}/>
            </div>
            <div className={ css.column }>
                <label>Width
                    <input type="number" name="width" value={ width } onChange={ onChange }/>
                </label>
                <label>Height
                    <input type="number" name="height" value={ height } onChange={ onChange }/>
                </label>
                <label>Border Radius
                    <Slider title="radius" value={ radius } onChange={ handleChange }/>
                </label>
            </div>
            
            <button type="button" className={ css.button } onClick={ handleSave }>Save</button>
        </div>
    )
}

export default Editor