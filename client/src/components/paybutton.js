import React from 'react'

const PayButton = ({cartItems}) => {
  const user=JSON.parse(localStorage.getItem('user'))
  const handleCheckout=async()=>{
       try {
           const res=await fetch('api/v1/stripe/create-checkout-session',{
           method:"POST",
           headers:{
              "Authorization":"",
              "Content-Type":"application/json"
           },
            body:JSON.stringify({cartItems:cartItems,userId:user._id})
            })
            const data=await res.json()
            if(data.url){
                window.location.href=data.url
            }
       } catch (error) {
            console.log(error)
       }
  }
  return (
    <button onClick={()=>handleCheckout()} className='text-black bg-[#f0c14b] p-1 block my-2 rounded-sm'>Buy now</button>
  )
}

export default PayButton