import React from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchBar = () => {
  return <>
     <form className='flex justify-center items-center'>
        <input 
        type="text" 
        placeholder='search Amazon.in' 
        className='p-2 rounded-l-md w-[40rem]'/>
        <button className='bg-[#FEBD69] p-[10px] rounded-r-md text-black'><FaSearch size={20}/></button>
     </form>
  </>
}

export default SearchBar