import React, { useEffect, useRef, useState } from 'react'
import {ThemeContext, themes} from './Cursor-theme'
import { ChakraProvider } from '@chakra-ui/react'
import { configureStore } from '@reduxjs/toolkit'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Activities from './pages/Activities'
import Cursor from './components/Cursor'
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog/Blog'
import PostDetails from './pages/Blog/PostDetails'
import ArticleNav from './components/ArticleNav'


function App() {

  const cursorVisible = useRef(true)  




  return (
    <>
   
    <ChakraProvider>
        <Cursor />
        <Routes>
        <Route path='/' element={[ <Navbar/> ,<Home/>, <About/>, <Activities/>, <Footer/> ]}/>
        <Route path='/blog' element={[<ArticleNav/> ,<Blog/>]}/>
        <Route path='blog/article/:id' element={<PostDetails/>}/>
        </Routes>
    </ChakraProvider>    
    
    </>
  )
}

export default App
