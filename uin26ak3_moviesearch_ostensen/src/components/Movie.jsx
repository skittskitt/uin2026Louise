export default function Movie(movie) {
    const {image, title, year} = movie
    return (
        <article>
            <img src={image} alt={name} />
            <p>{title}</p>
            <p>{year}</p>
        </article>
    )
}
