export default function ShoppingList({title, itemValue}) {

    return (
        <form>
            <input type="checkbox" id="nyvare" name="nyvare"/>
            <label htmlFor="nyvare">{title}</label>

            <input type="number" id="antallVare" name="antallVare" min="1" value={itemValue} />
            <label htmlFor="antallVare"></label>
        </form>
    )
}