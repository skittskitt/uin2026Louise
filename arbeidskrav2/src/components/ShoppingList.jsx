export default function ShoppingList(){
    return(
        <section className="main-layout">
            <form className="varer">
                <label htmlFor="vare">Vare</label>
                <input type="text" id="vare" name="vare"></input>

                <label htmlFor="antall">Antall</label>
                <input type="number" id="antall" name="antall"></input>
            </form>

            <button>Legg til vare</button>

            <form className="antallVarer">
                <input type="checkbox" id="melk" name="melk"/>
                <label htmlFor="melk">Melk</label>

                <label htmlFor="antall"></label>
                <input type="number" min="1" id="antall" name="antall"></input>

                <input type="checkbox" id="egg" name="egg"/>
                <label htmlFor="egg">Egg</label>

                <label htmlFor="antall"></label>
                <input type="number" min="1" id="antall" name="antall"></input>
            </form>
        </section>
    )
}