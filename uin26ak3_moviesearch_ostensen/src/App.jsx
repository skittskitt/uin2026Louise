import { useState } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'


import Home from './pages/Home'
import Layout from './components/Layout'

function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route index element={ <Home />}></Route>
        <Route path='/' element={''}></Route>
        <Route path='//:id' element={''}></Route>
      </Routes>
    </Layout>
    </>
  )
}

export default App
