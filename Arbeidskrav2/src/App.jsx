import './App.css'
import './assets/style/layout.scss'
import AddForm from './components/AddForm'
import ShoppingItem from './components/ShoppingItem'
import { useState } from 'react'

function App() {

  const shoppingItems = [
    {
      id: 0,
      item:"egg",
      number: 1
    },
    {
      id: 1,
      item:"melk",
      number: 2
    },
  ]

  const [list, updateList] = useState(shoppingItems)
  const [listItem, updateState] = useState();

  console.log(listItem, "from app")

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
