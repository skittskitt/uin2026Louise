export default function ShoppingItem(item) {
    
    return(
        <article className="main-layout">
            <form className="varer">
                <input type="checkbox" id={item} name={item}/>
                <label htmlFor={item}>{item}</label>

                <label htmlFor="antall"></label>
                <input type="number" min="1" id="antall" name="antall"></input>
            </form>
        </article>
    )
}