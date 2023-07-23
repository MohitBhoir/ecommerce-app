import React, { useEffect,useState} from 'react'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PayButton from '../components/paybutton';

const Cart = () => {
  const [data,setData]=useState(null)
  const navigate=useNavigate()
  const user = JSON.parse(localStorage.getItem("user"));
  const handleClick=(id)=>{
      removeProduct(id)
  }

  // remove products from cart
  const removeProduct = async (id) => {
    try {
      const res = await fetch(`/api/v1/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        }
      });

      const data = await res.json();
      if (data) {
        toast.success("product removed successfully");
        navigate("/")
      }
    } catch (error) {
      toast.error("oops!some error occured");
    }
  };

  // to fetch products added to the cart by customer
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/v1", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data) {
        setData(data);
        console.log(data)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
      if(user){
          fetchProducts()
      }
  },[])
  return <>
       <div>
            {
          data!=null && data.data.length!=0?<div className='grid grid-cols-2 gap-4 p-3'>{
          data.data.map((e)=>{
                const {_id,brand,name,price}=e
                return <article id={name} 
                 className='rounded-md shadow-xl p-2'>
                      <div className='flex p-2'>
                        <div>
                            <h1 className='text-xl font-bold my-1 text-center text-[#37475A]'>
                              {brand}</h1>
                            <h1 className='text-xl my-1'>{name}</h1>
                            <div className='flex'>
                                <span >₹</span>
                               <h1 className='text-2xl font-bold'>{price}</h1>
                            </div>
                            <button 
                            className='text-white bg-red-700 rounded-sm p-1 my-2'
                            onClick={()=>handleClick(_id)}
                            >
                              Remove from cart</button>
                            <PayButton cartItems={e}/>
                        </div>
                      </div>
                 </article>
          })
      }</div>:<div className='flex-col justify-center align-middle'>
           <h1 className='text-center text-2xl text-red-600'>oops! there are no products</h1>
           <img src={require("./bag.jpg")} alt="" className='h-[400px] w-[400px] rounded-full
           animate-bounce mx-[30%] my-[100px]'/>
      </div>
            }
       </div>
  </>
}

export default Cart