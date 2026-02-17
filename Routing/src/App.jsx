import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Categories from './components/Categories'
import About from './components/About'
import Home from './components/Home'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoryLayout from './components/CategoryLayout'

function App() {

  //Kun en h1 vil vises. legg til /category for å finne kategori-siden.
  //Outlet: Alt som kommer under outlet skal sendes ut.
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path='categories' element={<CategoryLayout />} >
          <Route index element={<Categories/>} />
          <Route path=':slug' element={<Category />} />
        </Route>
        <Route path='about' element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
