import '../assets/style/layout.scss'

export default function AddForm({listItem, updateState, updateList}){

    const handleChange = (e)=>{
        const {name, value} = e.target

        updateState((prev) => ({...prev, [name]: value}))
        console.log("List Item:", listItem)
    }

    const handleClick = (e)=> {
        e.preventDefault()

        const uniqId = crypto.randomUUID()
        updateList((prev) => ([...prev, {id:uniqId,...listItem}]))
        
    }

    return(
        <form className="input-layout" onSubmit={handleClick}>
            <label htmlFor="vare">Vare</label>
            <input name="vare" type="text" id="vare" placeholder="Egg..." onChange={handleChange}></input>
            
            <label htmlFor="antall">Antall</label>
            <input type="number" id="antall" name="antallvare" min="1" onChange={handleChange} />
            <button onClick={handleClick}>Legg til vare</button>
        </form>
    )
}