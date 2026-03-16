import '../assets/style/style.scss'
import { useEffect, useState } from "react"
import History from "../components/History"
import Preview from "../components/Preview"

    /*Anngående "Søket skal ikke trigges før brukeren har skrevet minimum tre tegn" fra arbeidskravet.
    I utgangspunktet hadde jeg en søke-knapp, men når jeg leste over setningn i ettertid
    innså jeg at det kunne bli toklet slik at søket oppdaterer seg for hvert symbol, og kjører søket etter
    minst tre symbol, i stedet for at søke-knappen skulle kunne gjøres klikkbart.
    Jeg bestemte meg for å gå for den første tolkningen og fjernet søkeknappen min.  */

export default function Home() {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    const [focused, setFocused] = useState(false) 

    const storedHistory = localStorage.getItem("search")
    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])

    console.log("Storage:", storedHistory) //Viser det den skal

    //API-nøkkel.
    const apiKey = import.meta.env.VITE_OMDB_API_KEY

    //UseEffect som skal kjøre med en gang siden lastes inn, også forteller den til å søke James Bond.
    useEffect(()=>
        { localStorage.setItem("search", JSON.stringify(history))}, [history])

        const getMovies = async (search)=> {    
            if (!search) return

            const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`)
            const data = await response.json()

        //Skjekker om APIet fant filmen.
        /*Kode jeg fikk ved hjelp av copilot: https://copilot.microsoft.com/chats/csfy9GEnoN27249MShedP */
            if (data.Search) {
                setMovies(data.Search) //Lagre film i state
            } else {
                setMovies([]) //Lagre tom liste
            }
        }

    //James Bond filmer vil vises ved oppstart.
    useEffect(() => {
        getMovies("james bond")
    }, [])

    //Henter verdien fra søketfeltet.
    const handleChange = (e)=>{
        const value = e.target.value
        setSearch(value)

        //Skjekker om minst tre tegn er skrevet inn.
        if(value.length >= 3){
            getMovies(value)
        } else {
            setMovies([])
        }
    }

    return (
        <>
        <main>
            <h1>Forside</h1>
            <form className="input-layout">
                <label> Søk etter film
                    <input type="search" placeholder="Princess Mononoke" onChange={handleChange} onFocus={()=> setFocused(true)}></input>
                </label>

                {focused ? <History history={history} setSearch={setSearch} /> : null}
            </form>

            <section className="preview-section">
                <h2>Filmer:</h2>
                <Preview movies={movies}></Preview>
            </section>
        </main>
        </>
    )
}