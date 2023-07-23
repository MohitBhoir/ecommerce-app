import React from 'react'
import products from '../data/products'
import { toast } from "react-toastify";

const Shop = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleClick=(brand,name,price)=>{
        createProduct(brand,name,price)
  }
  const createProduct = async (brand,name,price) => {
    try {
      const res = await fetch("/api/v1", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({brand:brand,name:name,price:price}),
      });

      const data = await res.json();
      if (data) {
        toast.success("product added successfully");
      }
    } catch (error) {
       toast.error("please login first");
    }
  };
  return <>
      <div className='grid grid-cols-2 gap-4 p-3'>{
          products.map((e)=>{
              const {id,name,price,image,type,desc}=e
                 return <article id={id} 
                 className='rounded-md shadow-xl'>
                      <div className='flex'>
                        <img src={require(`${image}`)} alt=""  
                      className='h-[300px] w-[300px]'/>
                        <div>
                            <h1 className='text-xl font-bold my-1 text-center'>{desc.Brand}</h1>
                            <h1 className='text-xl my-1'>{name}</h1>
                            <div className='flex'>
                                <span >₹</span>
                               <h1 className='text-2xl font-bold'>{price}</h1>
                            </div>
                            <button onClick={()=>handleClick(desc.Brand,name,price)}
                            className='text-white bg-[#f0c14b] w-max rounded-sm p-1 my-2 cursor-pointer'>
                            Add to cart</button>
                        </div>
                      </div>
                 </article>
          })
      }</div>
  </>
}

export default Shop