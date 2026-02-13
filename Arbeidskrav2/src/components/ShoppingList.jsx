export default function ShoppingList(itemName) {

    return (
        <form>
            <input type="checkbox" id="melk" name="melk"/>
            <label htmlFor="melk">{itemName}</label>

            <input type="number" id="antallVare" name="antall" min="1" />
            <label htmlFor="todocontent"></label>
        </form>
    )
}