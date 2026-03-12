import { useState } from "react"

export default function Preview() {
    const [movies, setMovies] = useState([])

    const getMovies = async ()=> {
        const response = await fetch('')
        const data = await response.json()
        setMovies(data.results)
    }

    useEffect(()=>{
        getMovies()
    },[])

    return(
        <aside>
            <h2>Filmer:</h2>
            <section>
                {/* {movies?.map((movie) => <Movie key={movie.id} {movie.movie} />)} */}
            </section>
        </aside>
    )
}