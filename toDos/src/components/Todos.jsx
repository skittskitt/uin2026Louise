import Todo from "./Todo"

/*Håndterer og viser samling med todo-oppgaver.*/
export default function Todos({todoItems, setTodoList}){


    return ( /*Vi rederer ut todo-komopnents.*/
        <section className="flex-r">
            <h2>Todos</h2>
            {todoItems.map((item) => <Todo key={item.id} title={item.title} content={item.content} id={item.id} setTodoList={setTodoList} />)}
        </section>
    )
}