export default function Layout(props) {

    const {children} = props
    
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
            <p>
                Built by Andréanne Fournier<br/>                
            </p>
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