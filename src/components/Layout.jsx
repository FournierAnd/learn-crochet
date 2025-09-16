export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <div className="website-header">
                <h1>Hooks & Stitches</h1>
                <h3>Become a crochet witch or wizard in 30 days</h3>
            </div>
        </header>
    )

    //Add link to portfolio
    const footer = (
        <footer>
            <p className="star">&#10022;</p>
            <p className="footer-name">Built by Andréanne Fournier</p>
            <p className="star">&#10022;</p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}