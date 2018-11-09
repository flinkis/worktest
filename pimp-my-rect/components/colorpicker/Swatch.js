import css from "../../styles/color.scss"

const Swatch = ({ value, title="color", selected, onClick = () => {} }) => {
    const handleClick = () => onClick(value, title);
    const boxShadow = selected ? '0 0 0 1px #333' : 'none';

    return (
        <div style={ { backgroundColor: value, boxShadow: boxShadow } }
            title={title}
            className={ css.swatch }
            onClick={handleClick}></div>
    )
}

export default Swatch