import React from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './component/AppRouter'

const App = () => {
  return (
    <BrowserRouter basename='/elearning-solutions'>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
