// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import './App.css'
import Home from './pages/Home'
// import Articles from './pages/Articles'
import Footer from './components/Footer'
import About from './pages/About'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Activities from './pages/Activities'

function App() {


  return (
    <>
    <ChakraProvider>
      <Router>
         <Navbar/>
         <Home/>
          <About/>
          <Activities/>
          <Projects/>
          <Footer/>
        </Router>
    </ChakraProvider>
    </>
  )
}

export default App
