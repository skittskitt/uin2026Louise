export default function MovieList({movie, onClick}) {
    //Det jeg vil mappe ut fra hver enkelt film.
    const {Poster, Title, Year} = movie
    
    return ( //Vi må ha samme handleClick her også, for å kunne klikke på fil
        <article onClick={onClick}>
            <img src={Poster} />
            <p>{Title}</p>
            <p>{Year}</p>
        </article>
    )
}