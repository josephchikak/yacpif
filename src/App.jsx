import { useEffect, useRef, useState } from 'react'
import React from 'react';
import {ThemeContext, themes} from './Cursor-theme'
import { BrowserRouter as Router,} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { configureStore } from '@reduxjs/toolkit'
import './App.css'
import Home from './pages/Home'
// import Articles from './pages/Articles'
import Footer from './components/Footer'
import About from './pages/About'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Activities from './pages/Activities'
import Cursor from './components/Cursor'


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
      <Router>
        <Cursor />
         <Navbar/> 
         <Home/>
          <About  mouseOverEventB= {mouseOverEventB} />
          <Activities/>
          <Projects/>
          <Footer/>
        </Router>
    </ChakraProvider>    
    
    </>
  )
}

export default App
