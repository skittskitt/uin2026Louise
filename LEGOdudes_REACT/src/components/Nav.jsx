import { Link } from "react-router-dom";

export default function Nav(){
    return(
      <nav>
        <Link to="city">City</Link>
        <Link to="ninajgo">Ninjago</Link>
        <Link to="castles-and-knights">Castles & Knights</Link>
        <Link to="marine-and-pirates">Marine & Pireates</Link>
        <Link to="movie-characters">Movie Characters</Link>
      </nav>
    )
  }