import MovieList from "./MovieList"

export default function Preview({movies}) {
    //Mapping av alle filmene som hentes.

    return(
        <> {movies?.map((movie) => <MovieList key={movie.imdbID} movie={movie} />)} </>
    )
}