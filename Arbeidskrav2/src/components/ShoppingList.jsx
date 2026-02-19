export default function ShoppingList({title, itemValue}) {

//Varen som blir lagt til
    return (
        <form>
            <input type="checkbox" id="vare" name="vare"/>
            <label htmlFor="vare">{title}</label>

            <input type="number" id="antallVare" name="antallVare" min="1" defaultValue={itemValue} />
            <label htmlFor="antallVare"></label>
        </form>
    )
}