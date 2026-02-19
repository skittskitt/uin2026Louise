import './App.css'
import './assets/style/layout.scss'
import AddForm from './components/AddForm'
import ShoppingItem from './components/ShoppingItem'
import { useState } from 'react'

function App() {

  const shoppingItems = [
    {
      id: 0,
      item:"melk",
      number: 2,
      checked: false
    },
    {
      id: 1,
      item:"egg",
      number: 1,
      checked: true
    },
  ]

  const [list, updateList] = useState(shoppingItems)
  const [listItem, updateState] = useState();

  console.log(listItem, "from app")
  console.log("Shoppingitems:", shoppingItems)

  return (
    <>
      <main className='main-layout'>
        <h1>Handleliste</h1>
        <AddForm listItem={listItem} updateState={updateState} updateList={updateList}/>
        <ShoppingItem shoppingItems={list} updateList={updateList}/>
      </main>
    </>
  )
}

export default App
