export default function AddForm(updateText) {

    //Funksjon som oppdateres hver gang man skriver i feltene.
    /*const textState = (e) => {
        const {item, value} = e.target
    }
    updateText((prev) =>({...prev, [item]:value}))*/

    return (
        <form className="varer">
                <label htmlFor="vareNavn">Vare</label>
                <input type="text" id="vareNavn" name="vare" placeholder="Egg..." />

                <label htmlFor="antallVare">Antall</label>
                <input type="number" min="1" id="antallVare" name="antall" />

                <button>Legg til vare</button>
        </form>
    )

    /*
    <section className="main-layout">
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
    */
}