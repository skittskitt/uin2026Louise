export default function MovieList({movie}) {
    //Det jeg vil mappe ut fra hver enkelt film.
    const {Poster, Title, Year} = movie
    
    return (
        <article>
            <img src={Poster} />
            <p>{Title}</p>
            <p>{Year}</p>
        </article>
    )
}