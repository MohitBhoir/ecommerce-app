import React from 'react'
import SearchBar from './searchbar'

const Navbar = () => {
  return <>
       <nav className='flex-col justify-center text-white'>
            <div className='flex items-center justify-between bg-[#232F3E]'>
                <img src={require('./amazon.png')} alt="" className='h-[100px] w-[130px]'/>
                <SearchBar/>
                <h1>random1</h1>
            </div>
            <ul className='flex items-center justify-between bg-[#37475A] p-[0.4rem]'>
                    <li>Best sellers</li>
                    <li>Today's Deal</li>
                    <li>Electronics</li>
                    <li>Mobiles</li>
                    <div>random design</div>
            </ul>
       </nav>
  </>
}

export default Navbar