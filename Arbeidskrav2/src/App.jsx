import './App.css'
import AddForm from './components/AddForm'
import ShoppingItem from './components/ShoppingItem'
import { useState } from 'react'

function App() {

  const shoppingItems = [
    {
      id: 0,
      itemName:""
    },
    {
      id: 1,
      itemName:""
    },
    {
      id: 2,
      itemName:""
    }
  ]

  const [allItem, updateList] = useState([])
  const [listItem, updateState] = useState ()

  return (
    <>
      <main>
        <h1>Handleliste</h1>
        <AddForm listItem={listItem} updateState={updateState} updateList={updateList}/>
        <ShoppingItem shoppingItems={allItem} updateList={updateList}/>
      </main>
    </>
  )
}

export default App
