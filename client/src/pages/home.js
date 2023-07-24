import React from 'react'
import Main from '../components/main'
import { Link } from 'react-router-dom'

const Home = () => {
  return <>
      <Main/>
      <div className='flex'>
           <section className='border-[2px] bg-[#37475A]  w-max m-2 p-2'>
        <h1 className='p-2 text-2xl font-bold text-white'>Up to 50% off on electroincs</h1>
        <div>
            <div className='flex gap-2 mb-4'>
                <div><img src={require('./wash1.jpg')} alt="" /></div>
                <div><img src={require('./wash2.jpg')} alt="" /></div>
            </div>
            <div className='flex gap-2'>
                <div><img src={require('./mobile1.jpg')} alt="" /></div>
                <div><img src={require('./mobile2.jpg')} alt="" /></div>
            </div>
        </div>
      </section>
       <section className='border-[2px] bg-[#f0c14b] w-max m-2 p-2'>
        <h1 className='p-2 text-2xl font-bold'>Up to 60% off | styles for men</h1>
        <div className='flex gap-4'>
                <div><img src={require('./watch.jpg')} alt=""/></div>
                <div><img src={require('./shoes.jpg')} alt="" /></div>
        </div>
        <Link to='/shop'>explore more</Link>
      </section>
      </div>
  </>
}

export default Home



