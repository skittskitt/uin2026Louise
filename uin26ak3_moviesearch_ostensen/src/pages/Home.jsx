import { useEffect, useState } from "react"

export default function Home() {
    const [search, setSearch] = useState()
    const storedHistory = localStorage.getItem("search")

    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])

    const apiUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    const apiKey = import.meta.env.VITE_OMDB_API_KEY

    console.log(apiKey)

    useEffect(()=>{
        
        localStorage.setItem("search", JSON.stringify(history))
    },[history])
    
    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${apiUrl}${apiKey}`)
            const data = await response.json()
        }
        catch(err){
            console.error(err);
        }
    }

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()

        setHistory((prev) => [...prev, search])
    }

    return (
        <>
        <main>
            <h1>Forside</h1>
            <form onSubmit={handleSubmit}>
                <label>
                Søk etter film
                    <input type="search" placeholder="" onChange={handleChange} ></input>
                </label>
                <button onClick={getMovies}>Søk</button>
            </form>
        </main>
        </>
    )
}