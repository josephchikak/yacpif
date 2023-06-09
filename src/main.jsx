import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { BrowserRouter as Router,} from 'react-router-dom'



import {store} from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    
    <Provider store = {store}>

      
      <Router basename='/'>
         <App />
      </Router>
   </Provider>

)
