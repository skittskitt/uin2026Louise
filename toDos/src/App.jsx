import './App.css'
import './style/todocard.scss'
import './style/layout.scss'
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'
import { useState } from 'react'
/*Se etter om import før componentet blir lagt til.*/

function App() {

  const todoItems = [
        {
            id: 0,
            title:"Gå på butikken",
            content: "Handle spagetthi og dorull"
        },
        {
            id: 1,
            title:"Skrive emnerapport",
            content: "Gå i gjennom statestikk og skrive rappoert basert på tall og tilbakemelding"
        },
        {
            id: 2,
            title:"Kjøpe kattemat",
            content: "Kjøpe ny slankefor..."
        }
    ]

  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState()

  return (
    <main>
      <h1>Todo app</h1>
      <AddToDo todo={todo} setTodo={setTodo} setTodoList={setTodoList} />
      <Todos todoItems={todoList} setTodoList={setTodoList} />
    </main>
  )
}

export default App
