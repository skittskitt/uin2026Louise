import ShoppingList from "./ShoppingList";
import '../assets/style/layout.scss'

export default function ShoppingItem({shoppingItems}) {
    return(
        <section className="return-input">
            {shoppingItems.map((item) => <ShoppingList key={item.id} title={item.item} itemValue={item.number} />)}
        </section>
    )
}