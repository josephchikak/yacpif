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
import Blog from './pages/Blog'


function App() {

  const cursorVisible = useRef(true)  

  const toggleCursorVisibility = () => {
      if (cursorVisible.current){
      dotOutline.current.style.backgroundColor = "white"
      }
      else {
      dotOutline.current.style.backgroundColor = "black"
      }
  }



  const mouseOverEventB = () =>{
    // cursorEnglarged.current = true
    cursorVisible.current = true;
    toggleCursorVisibility();
}

  return (
    <>
   
    <ChakraProvider>
        <Cursor />
         <Navbar/> 
        <Routes>
        <Route path='/' element={[<Home/>, <About/>, <Activities/>, <Projects/>, <Footer/> ]}/>
        <Route path='/blog' element={<Blog/>}/>
        </Routes>
    </ChakraProvider>    
    
    </>
  )
}

export default App
