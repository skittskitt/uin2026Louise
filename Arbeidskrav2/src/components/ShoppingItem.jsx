import ShoppingList from "./ShoppingList";

export default function ShoppingItem({shoppingItems, updateList}) {

    return(
        <section>
            {shoppingItems.map((item) => <ShoppingList key={item.id} title={item.title} id={item.id} updateList={updateList} />)}
        </section>
    )
}