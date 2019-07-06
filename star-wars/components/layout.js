import css from '../styles/general.scss'
import Loading from './loading'

const Layout = props => (
    <>
        {props.loading && <Loading />}
        <header className={css.header}>
            <h1 className={css.header__title}>Star Wars</h1>
            <h4 className={css.header__subtitle}>_Frontend Assignment_</h4>
        </header>
        {props.children}
    </>
)

export default Layout
