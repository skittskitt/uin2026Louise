export default function MovieList(movie) {
    const {Poster, Title, Year} = movie
    return (
        <article>
            <img src={Poster} alt={name} />
            <p>{Title}</p>
            <p>{Year}</p>
        </article>
    )
}
