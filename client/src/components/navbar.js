import React from 'react'
import SearchBar from './searchbar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <>
       <nav className='flex-col justify-center text-white'>
            <div className='flex items-center justify-between bg-[#232F3E]'>
                <img src={require('./amazon.png')} alt="" className='h-[100px] w-[130px]'/>
                <SearchBar/>
                <Link to="/login" className='cursor-pointer'>sign in</Link>
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