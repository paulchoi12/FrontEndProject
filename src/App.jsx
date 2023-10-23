import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ArticleList from './components/ArticleList'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
 

  return (
    <div className='app'>
      <header>
        <h1>this is the test page</h1>
      </header>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/api' element={<ArticleList/>}></Route>
      </Routes>

    </div>
  )
}

export default App
