import React from 'react'
import products from '../data/products'

const Ele = () => {
  return <>
      <h1>electronics</h1>
      <div>{
          products.map((e)=>{
              const {id,name,price,image,type}=e
              if(type.startsWith('electronics')){
                 return <article id={id}>
                      <h1>{name}</h1>
                      <h2>{price}</h2>
                      <img src={require(`${image}`)} alt="" />
                 </article>
              }
          })
      }</div>
  </>
}

export default Ele