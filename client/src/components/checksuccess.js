import React from 'react'

const CheckSuccess = () => {
  return <>
     <div className='flex-col p-4'>
          <h1 className='mx-[45%] text-3xl font-bold text-green-600'>payment successful</h1>
         <img src={require('./success.jpg')} alt=""  className='h-[300px] w-[300px] mx-[40%] my-8
         rounded-full animate-pulse'/>
     </div>
  </>
}

export default CheckSuccess