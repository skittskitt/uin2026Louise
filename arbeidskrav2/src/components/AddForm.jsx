export default function AddForm(checkPrev, setShoppinglist, shoppingitem) {

    const updateText = (e) => {
        const {name, value} = e.target

        checkPrev((prev) => ({...prev, [name]: value}))
    }

    const updateClick = (e) => {
        e.preventDefault()
        const uniqId = crypto.randomUUID()
        setShoppinglist((prev) => ([...prev, {id:uniqId,...shoppingitem}]))
    }

    return (
        <form onSubmit={updateClick}>
            <label htmlFor="vare">Vare</label>
            <input name="varenavn" type="text" id="vare" placeholder="Egg..." onChange={updateText}></input>
            
            <label htmlFor="antall">Antall</label>
            <input type="number" id="antall" name="antallvare" min="1" onChange={updateText} />
            <button>Legg til vare</button>
        </form>
    )
    
}