import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ArticleList from './components/ArticleList'
import Nav from './components/Nav'
import Home from './components/Home'
import Article from './components/ArticleByID'
import ArticleGenre from './components/ArticleGenre'
import CodingPage from './components/ArticleGenres/Coding'
import FootballPage from './components/ArticleGenres/FootBall'
import CookingPage from './components/ArticleGenres/Cooking'

function App() {
 

  return (
    <div className='app'>
      <header>
        <h2>Article Finder</h2>
      </header>
      <Nav/>
      <Routes>
        <Route path='/api' element={<Home/>}></Route>
        <Route path='/api/articles/:article_id' element={<Article/>}></Route>
        <Route path='/api/articles/:article_id/comments' element={<Article/>}></Route>
        <Route path='/api/articles' element={<ArticleList/>}></Route>
        <Route path='/api/articles/category' element={<ArticleGenre/>}></Route>
        {/* <Route path='/api/articles/category/coding' element={<CodingPage/>}></Route>
        <Route path='/api/articles/category/football' element={<FootballPage/>}></Route>
        <Route path='/api/articles/category/cooking' element={<CookingPage/>}></Route> */}
   
      </Routes>

    </div>
  )
}

export default App
