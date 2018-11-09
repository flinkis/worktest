import React from 'react'

import ColorHeader from './ColorHeader.js'
import Swatch from './Swatch.js'

import css from "../../styles/color.scss"

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { selected: null };
    }

    handleClick(value, title) {
        this.props.handleChange(value, title);
    }

    render() {
        const { colors, value } = this.props;

        return (
            <div className={ css.colorPicker }>
                <ColorHeader selected={ value } />
                { colors.map((color, index) => <Swatch key={ index } value={ color } selected={ color === value } onClick={ this.handleClick } />) }
            </div>
        )
    }
}

ColorPicker.defaultProps = {
    colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB',
        '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']
}
