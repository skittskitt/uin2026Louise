import Todo from "./Todo"

/*Håndterer og viser samling med todo-oppgaver.*/
export default function Todos({todoItems, setTodoList}){


    return ( /*Vi rederer ut todo-komopnents.*/
        <section>
            {todoItems.map((item) => <Todo key={item.id} title={item.title} id={item.id} setTodoList={setTodoList} />)}
        </section>
    )
}