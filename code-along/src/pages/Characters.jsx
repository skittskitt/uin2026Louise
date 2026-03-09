import { useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard"

export default function Characters() {
    
    const [characters, setCharacters] = useState([])

    const getAllCharacters = async ()=> {
        //try-catch er ikker nødvendig, men kan være lurt.
        try{
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()

            setCharacters(data.results)
        }catch(err){
            console.error(err)
        }
    }

    console.log(characters)

    useEffect(()=> {
        getAllCharacters()
    },[])

    return (
        <main>
            <h1>Katakterer</h1>
            <section>
                {characters?.map((char) => <CharacterCard char={char} />)}
            </section>
        </main>
)}