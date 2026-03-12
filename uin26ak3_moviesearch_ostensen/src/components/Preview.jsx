import { useState } from "react"
import { Movie } from "../components/Movie"

export default function Preview() {
    const [movies, setMovies] = useState([])

    const getMovies = async ()=> {
        const response = await fetch(`http://www.omdbapi.com/?s=${search}`)
        const data = await response.json()
        setMovies(data.results)
    }

    useEffect(()=>{
        getMovies()
    },[])

    return(
        <h2>Filmer:</h2>
        /* {movies?.map((movie) => <Movie key={movie.id} movie={movie} />)} */
    )
}