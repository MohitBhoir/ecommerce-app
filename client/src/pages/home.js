import React from 'react'
import Main from '../components/main'

const Home = () => {
  return <>
      <Main/>
      <section className='border-[2px] border-black w-max m-2 p-2'>
        <h1 className='p-2 text-2xl font-bold'>Up to 50% off on electroincs</h1>
        <div className='flex'>
            <div>
                <div><img src={require('./wash1.jpg')} alt="" /></div>
                <div><img src={require('./wash2.jpg')} alt="" /></div>
            </div>
            <div>
                <div><img src={require('./mobile1.jpg')} alt="" /></div>
                <div><img src={require('./mobile2.jpg')} alt="" /></div>
            </div>
        </div>
      </section>
  </>
}

export default Home



