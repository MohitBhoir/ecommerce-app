import React from 'react'
import products from '../data/products'

const Ele = () => {
  return <>
      <h1 className='text-center text-2xl font-bold'>electronics</h1>
      <div className='grid grid-cols-2 gap-4 p-3'>{
          products.map((e)=>{
              const {id,name,price,image,type,desc}=e
              if(type.startsWith('electronics')){
                 return <article id={id} 
                 className='rounded-md shadow-xl'>
                      <div className='flex'>
                        <img src={require(`${image}`)} alt=""  
                      className='h-[300px] w-[300px]'/>
                        <div>
                            <h1 className='text-xl font-bold my-1 text-center'>{desc.Brand}</h1>
                            <h1 className='text-xl my-1'>{name}</h1>
                            <h1 className='text-white bg-red-700 p-1 w-max rounded-sm my-3'>
                                Deal of the Day</h1>
                            <div className='flex'>
                                <span >₹</span>
                               <h1 className='text-2xl font-bold'>{price}</h1>
                            </div>
                        </div>
                      </div>
                 </article>
              }
          })
      }</div>
  </>
}

export default Ele