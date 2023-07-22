import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Ele from './pages/Ele'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/login'
import Register from './pages/register'

const App = () => {
  return <>
      <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/electronics" element={<Ele/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    </Router>
    <ToastContainer/>
  </>
}

export default App
