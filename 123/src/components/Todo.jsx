export default function Todo({title}){

    return (
        <form className="list-item">
            <input type="checkbox" id="melk" name="melk"/>
            <label htmlFor="melk">{title}</label>

            <input type="number" id="antallVare" name="antall" min="1" />
            <label htmlFor="todocontent"></label>
        </form>
    )
}