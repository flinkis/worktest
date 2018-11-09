import css from "../styles/general.scss"

const toPercent = (number) => {
    return number + '%'
}

const appendPx = (number) => (
    number + 'px'
)

const Output = (props) => (
    <div className={css.outputWrapper} >
        <div className={css.output} style={{
            backgroundColor: props.color, 
            borderRadius: toPercent(props.radius), 
            width: appendPx(props.width), 
            height: appendPx(props.height)
        }}></div>
    </div>
)

export default Output