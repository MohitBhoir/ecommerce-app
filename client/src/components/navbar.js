import React from 'react'
import SearchBar from './searchbar'
import { Link } from 'react-router-dom'
import {FaSignInAlt,FaSignOutAlt,FaUser,FaHome} from 'react-icons/fa'
import {useEffect, useState} from 'react'

const Navbar = () => {
   const user=JSON.parse(localStorage.getItem('user'))
   const [data,setData]=useState(user)
   const logout=()=>{
          localStorage.removeItem('user')
          window.location.reload()
          setTimeout(()=>{
               window.stop()
          },40)
   }
  return <>
       <nav className='flex-col justify-center text-white'>
            <div className='flex items-center justify-between bg-[#232F3E] p-2'>
                <img src={require('./amazon.png')} alt="" className='h-[100px] w-[130px]'/>
                <SearchBar/>
                <>
                   {
                    data?

                    <Link to="/login" className='text-white   text-xl  cursor-pointer'>
                    <FaSignOutAlt  className='hover:text-[#f0c14b] hover:bg-white p-2 
                    rounded-md duration-200' size={40} onClick={logout} />Logout</Link>

                    :

                    <Link to="/login" className='text-white  text-xl  cursor-pointer'>
                    <FaSignInAlt className='hover:text-[#f0c14b] hover:bg-white p-2 
                    rounded-md duration-200' size={40} />Login</Link>
                   }
               </>
            </div>
            <ul className='flex items-center justify-between bg-[#37475A] p-[0.4rem]'>
                    <Link to="/" className='cursor-pointer'>Home</Link>
                    <Link to="/electronics" className='cursor-pointer'>Electronics</Link>
                    <Link to="/register" className='cursor-pointer'>sign up</Link>
                    <div>random design</div>
            </ul>
       </nav>
  </>
}

export default Navbar