import '../assets/style/style.scss'
import { useEffect, useState } from "react"
import History from "../components/History"
import Preview from "../components/Preview"

export default function Home() {
    const [search, setSearch] = useState()
    const storedHistory = localStorage.getItem("search")
    const [focused, setFocused] = useState(false) 

    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])
    console.log("Storage:", storedHistory) //Viser riktig.

    //API url og nøkkel.
    const apiUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    const apiKey = import.meta.env.VITE_OMDB_API_KEY

    useEffect(()=>
        { localStorage.setItem("search", JSON.stringify(history))},[history])
    
    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${apiUrl}${apiKey}`)
            const data = await response.json()
        }
        catch(err){ console.error(err);}
    }

    //Henter verdien fra søket.
    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    //Lagrer verdiene i history
    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()

        setHistory((prev) => [...prev, search])
    }

    return (
        <> {/*Kan jeg flytte handleChange fra onChange til en funksjon som endres etter 3 tegn er skrevet inn?*/}
        <main>
            <h1>Forside</h1>
            <form className="input-layout" onSubmit={handleSubmit}>
                <label>
                Søk etter film
                    <input type="search" placeholder="Princess Mononoke" onChange={handleChange} onFocus={()=> setFocused(true)}></input>
                </label>
                {focused ? <History history={history} setSearch={setSearch} /> : null}
                <button onClick={getMovies}>Søk</button>
            </form>
            <section>
                <h2>Filmer:</h2>
                <Preview></Preview>
            </section>
        </main>
        </>
    )
}