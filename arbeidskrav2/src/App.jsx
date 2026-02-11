import './App.css'
import './style/layout.scss'
import AddForm from './components/AddForm'
import { useState } from 'react'

function App() {

  const addItem = [
    {
      id: 0,
      item: "melk",
    },
    {
      id: 1,
      item: "egg"
    }
  ]

const [shoppingitem, updateText] = useState(addItem)

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm shoppingitem={shoppingitem} updateText={updateText}/>
    </main>
  )
}

export default App
