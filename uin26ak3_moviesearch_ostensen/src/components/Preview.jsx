import { useEffect, useState } from "react"
import { MovieList } from "./components/MovieList"

export default function Preview() {
    const [movies, setMovies] = useState([])

    const apiKey = import.meta.env.VITE_OMDB_API_KEY

    //url: http://www.omdbapi.com/ + key: ?apikey=${apiKey} + søk: &?t=james+bond + id:&i=tt4896340
    const getMovies = async ()=> {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&?t=james+bond&i=tt4896340`)
        const data = await response.json()
        setMovies(data.results)

        console.log(data)
    }

    useEffect(()=>{
        getMovies()
    },[])

    return(
        <li>{movies?.map((movie) => <MovieList key={movie.imdbID} movie={movie.Title} />)}</li>
    )
}

/*
{"Title":"James Bond","Year":"2015","Rated":"N/A","Released":"24 Jul 2015","Runtime":"142 min","Genre":"Action, Comedy",
"Director":"Vasil Kacarov, Macha Sai Kishore, Sai Kishore Macha","Writer":"Shyam Ch, Gopimohan, Sai Kishore Macha",
"Actors":"Allari Naresh, Sakshi Chaudhary, Ashish Vidyarthi",
"Plot":"A down-to-earth software employee marries a lady without knowing about her past and criminal activities. 
Halfway through his marriage, he finds out her background and decides to run away, but ultimately comes to terms with his pro...",
"Language":"Telugu","Country":"India","Awards":"1 win",
"Poster":"https://m.media-amazon.com/images/M/MV5BNGM1Zjg5MmEtZjVlOC00NzM3LWEzMjktMGMwMTMwY2ZmMjVkXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings":[{"Source":"Internet Movie Database","Value":"5.2/10"}],"Metascore":"N/A","imdbRating":"5.2","imdbVotes":"314",
"imdbID":"tt4896340","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}
*/