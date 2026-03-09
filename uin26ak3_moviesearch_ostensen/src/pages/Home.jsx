export default function Home() {

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    const apiKey = import.meta.env.VITE_APP_API_KEY

    return(
        <main>
        <form>
            <label>
                Søk etter film
                <input type="search" placeholder=""></input>
            </label>
            <button>Søk</button>
        </form>

    </main>
    )
}