import ShoppingItem from "./ShoppingItem"

export default function ShoppingList(shoppingListItem){
    return (
        <section>
            {shoppingListItem.map((item) => <ShoppingItem key={item.id} title={title.id} id={item.id} />)}
        </section>
    )
}