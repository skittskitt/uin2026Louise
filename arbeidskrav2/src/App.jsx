import './App.css'
import './style/layout.scss'
import ShoppingList from './components/ShoppingList'
import AddForm from './components/AddForm'

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

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm />
    </main>
  )
}

export default App
