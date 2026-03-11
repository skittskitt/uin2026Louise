import './App.css'
import { Route, Routes} from 'react-router-dom'

import Home from './pages/Home'

function App() {

  return (
      <Routes>
        <Route index element={ <Home />}></Route>
        <Route path=":movie" element={''} /> 
      </Routes>
  )
}

export default App
