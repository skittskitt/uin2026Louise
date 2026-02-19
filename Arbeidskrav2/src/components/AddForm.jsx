import '../assets/style/layout.scss'

export default function AddForm({listItem, updateState, updateList}){

    const handleChange = (e)=>{
        const {name, value} = e.target

        updateState((prev) => ({...prev, [name]: value}))
        console.log("List Item:", listItem)
    }

    const handleClick = (e)=> {
        e.preventDefault()

    

        let inputValue = document.forms["submitForm"]["item","number"].value;
        if (inputValue === "") {
            alert("Begge felt må være fylt ut med riktige verdier.");
            return null;
        }else{
                const uniqId = crypto.randomUUID()
        updateList((prev) => ([{id:uniqId, ...listItem}, ...prev]))
        }
    }

    return(
        <form name="submitForm" className="input-layout" onSubmit={handleClick}>
            <label htmlFor="vare">Vare</label>
            <input name="item" type="text" id="vare" placeholder="Egg..." onChange={handleChange}></input>
            
            <label htmlFor="antall">Antall</label>
            <input type="number" id="antall" name="number" min="1" onChange={handleChange} />
            <button onClick={handleClick}>Legg til vare</button>
        </form>
    )
}