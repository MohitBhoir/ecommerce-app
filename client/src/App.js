import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Ele from './pages/Ele'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/login'
import Register from './pages/register'
import Shop from './pages/shop'
import Cart from './pages/cart'
import Review from './pages/review'
import AllReviews from './pages/allreview'
import CheckSuccess from './components/checksuccess'

const App = () => {
  return <>
      <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout-success" element={<CheckSuccess/>} />
            <Route path="/electronics" element={<Ele/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/review" element={<Review/>} />
            <Route path="/allreview" element={<AllReviews/>} />
        </Routes>
    </Router>
    <ToastContainer/>
  </>
}

export default App
