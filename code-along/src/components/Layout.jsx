import { Link } from 'react-router-dom'

export default function Layout({children}) {
    return (
        <>
            <nav>
                <Link to="/">Hjem</Link>
                <Link to="Characters">Karakterer</Link>
                <Link to="Character">Karakter</Link>
            </nav>

            {children}
        </>
    )
}