import { useNavigate } from "react-router-dom"
//useNavigate vil gjøre det mulig å navigere til en annen rute i applikasjonen.
import MovieList from "./MovieList"

export default function Preview({movies}) {
//Vi må lage en handleClick for når bruker trykker på film. Jeg fikk hjelp med copilot: https://copilot.microsoft.com/chats/eo8qUugo38BoTBAM9LUNz
const nav = useNavigate()
const handleClick = (Title) => {
    const slug = Title.toLowerCase().replaceAll(" ", "-") //Sikrer at det brukes småbokstaver.
    nav(`${slug}`)
}

//Mapping av alle filmene som hentes.
    return(
        <> 
            {movies?.map((movie) => <MovieList key={movie.imdbID} movie={movie} onClick={() => handleClick(movie.Title)} />)} 
        </>
    )
}