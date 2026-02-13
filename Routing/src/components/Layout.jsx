import {Link} from 'react-router-dom'
export default function Layout({children}) {
    return(
        <>
            <nav className='main-nav'>
                <Link to="/">Hjem</Link> {/* "/" går til hjemsiden */}
                <Link to="categories">Kategorier</Link>
                <Link to="about">Om oss</Link>
            </nav>

        {/* BArne elementene til disse taggene blir sendt ut her. */}
            {children}

            <footer>
                <p>2026 Utvikling av interaktive netssider - React router</p>
            </footer>
        </>
    )
}