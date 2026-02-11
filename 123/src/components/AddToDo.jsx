import "../style/form.scss"
export default function AddToDo({todo, setTodo, setTodoList}){

    // Funksjon som kjøres hver gang brukeren skriver i input eller textarea
    const handleChange = (e)=>{
        const {name, value} = e.target

        // Oppdaterer todo-state
        setTodo((prev) => ({...prev, [name]: value}))
    }

    const handleClick = (e)=> {
        e.preventDefault()
        const uniqId = crypto.randomUUID()
        setTodoList((prev) => ([...prev, {id:uniqId,...todo}]))
        console.log(todo)
    }

    return (
        <form onSubmit={handleClick}>
            <label htmlFor="vare">Vare</label>
            <input name="varenavn" type="text" id="vare" placeholder="Egg..." onChange={handleChange}></input>
            
            <label htmlFor="antall">Antall</label>
            <input type="number" id="antall" name="antallvare" min="1" onChange={handleChange} />
            <button>Legg til vare</button>
        </form>

    )
}