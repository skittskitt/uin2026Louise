export default function ShoppingList({title, itemValue, checked}) {

//Varen som blir lagt til
    return (
        <>
        <form>
            <input type="checkbox" defaultChecked={checked} id="vare" name="vare"/>
            <label htmlFor="vare">{title}</label>

            <input type="number" id="antallVare" name="antallVare" min="1" defaultValue={itemValue} />
            <label htmlFor="antallVare"></label>
        </form>
        </>
    )
}