import { useState } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Layout from './components/Layout'

function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route index element={ <Home />}></Route>
        <Route path='/characters' element={<Characters />}></Route>
        <Route path='/characters/:id' element={ <Character />}></Route>
      </Routes>
    </Layout>
    </>
  )
}

export default App
