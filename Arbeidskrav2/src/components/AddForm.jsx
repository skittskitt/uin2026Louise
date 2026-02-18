import '../assets/style/layout.scss'

export default function AddForm({listItem, updateState, updateList}){

    const handleChange = (e)=>{
        const {item, number} = e.target.value
        updateState((prev) => ({...prev, [item]: number}))
        console.log(listItem)
    }

    const handleClick = (e)=> {
        e.preventDefault()
        const uniqId = crypto.randomUUID()
        updateList((prev) => ([...prev, {id:uniqId,...listItem}]))
        
    }

    return(
        <form className="input-layout" onSubmit={handleClick}>
            <label htmlFor="vare">Vare</label>
            <input name="varenavn" type="text" id="vare" placeholder="Egg..." onChange={handleChange}></input>
            
            <label htmlFor="antall">Antall</label>
            <input type="number" id="antall" name="antallvare" min="1" onChange={handleChange} />
            <button onClick={handleClick}>Legg til vare</button>
        </form>
    )
}