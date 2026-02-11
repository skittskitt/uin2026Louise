import './App.css'
import './style/todocard.scss'
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'
import { useState } from 'react'

function App() {

  const todoItems = [

    ]

  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState()

  return (
    <main className="handleliste">
      <h1>Handleliste</h1>
      <AddToDo todo={todo} setTodo={setTodo} setTodoList={setTodoList} />
      <Todos todoItems={todoList} setTodoList={setTodoList} />
    </main>
  )
}

export default App
