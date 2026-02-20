import ShoppingList from "./ShoppingList";
import '../assets/style/layout.scss'

//Varene blir filtrert ut
export default function ShoppingItem({shoppingItems, updateList}) {
    return(
        <section className="return-input">
            {shoppingItems.map((item) => <ShoppingList key={item.id} title={item.item} itemValue={item.number} checked={item.checked} updateList={updateList} />)}
        </section>
    )
}