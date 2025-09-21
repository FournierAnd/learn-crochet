import { useEffect, useState } from "react"

export default function Layout({ children }) {

    const [isPink, setIsPink] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("pink", isPink);
    }, [isPink]);

    const header = (
        <header>
            <nav>
                <a href="https://hooksandstitches.netlify.app" class="btn btn-round"><i class="fa-solid fa-house"></i></a>
                <div>
                    <button class="btn btn-round theme" id="theme-toggle" onClick={() => setIsPink(!isPink)}>
                        <i class="fa-solid fa-circle-half-stroke"></i>
                    </button>
                </div>
            </nav>
            <div className="website-header">
                <h1>Hooks & Stitches</h1>
                <h3>Learn to crochet 30 stitches in 30 days</h3>
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