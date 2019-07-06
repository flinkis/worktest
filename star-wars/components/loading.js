import splash from '../styles/splash.scss'

const Loading = () => (
    <div className={splash.wrapper}>
        <h3 className={splash.header}>Loading</h3>
        <div className={splash.ellipsis}>
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
)

export default Loading
