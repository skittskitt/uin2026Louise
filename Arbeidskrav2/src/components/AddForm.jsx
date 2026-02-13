export default function AddForm({listItem, updateState, updateList}){

    const checkText = (e)=>{
        const {name, value} = e.target
        updateState((prev) => ({...prev, [name]: value}))
    }

    const checkClick = (e)=> {
        e.preventDefault()
        const uniqId = crypto.randomUUID()
        updateList((prev) => ([...prev, {id:uniqId,...listItem}]))
    }

    return(
        <form onSubmit={checkClick}>
            <label htmlFor="vare">Vare</label>
            <input name="varenavn" type="text" id="vare" placeholder="Egg..." onChange={checkText}></input>
            
            <label htmlFor="antall">Antall</label>
            <input type="number" id="antall" name="antallvare" min="1" onChange={checkText} />
            <button>Legg til vare</button>
        </form>
    )
}