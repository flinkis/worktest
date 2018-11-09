import ColorHeader from './ColorHeader.js'
import Swatch from './Swatch.js'

import css from "../../styles/color.scss"

const ColorPicker = ({ value, handleChange = () => {} }) => {
    const handleClick = (value, title) => handleChange(value, title);
    const colors = ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB',
        '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'];

    return (
        <div className={ css.colorPicker }>
            <ColorHeader value={ value } />
            { colors.map((color, index) => <Swatch key={ index } value={ color } selected={ color === value } onClick={ handleClick } />) }
        </div>
    )
};

export default ColorPicker;
