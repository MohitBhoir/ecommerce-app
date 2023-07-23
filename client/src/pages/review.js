import React,{useState} from 'react'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/loading'

const Review = () => {
    const pName=JSON.parse(localStorage.getItem('pName'))
    const user=JSON.parse(localStorage.getItem('user'))
    const [formData,setFormData]=useState({
     review:'',
     pName:pName,
  })
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()

  const {review}=formData

  const handleChange=(e)=>{
    setFormData((prevState)=>({
       ...prevState,
       [e.target.name]:e.target.value,
    }))
  }

  const handleSubmit=async(e)=>{
        e.preventDefault()
        setIsLoading(true)
         try {
          const res = await fetch("/api/v1/reviews", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({pName:pName,review:review,username:user.name}),
          });

          const data = await res.json();
          if (data) {
            toast.success("review submitted successfully");
            navigate('/shop')
          }
        } catch (error) {
          toast.error("please login first");
          navigate('/shop')
      }
}


  return <>
   <div className='flex gap-5 justify-center items-center my-2'>
     <h1 className='font-extrabold text-3xl'>Review</h1>
   </div>
     {isLoading?<Loading/>:
      <><div className='flex gap-6 justify-evenly'>
          <h1>{pName}</h1>
        </div>
     <form className='shadow-2xl rounded-md  m-8 p-4' onSubmit={handleSubmit}>
        <div className='flex gap-6 justify-evenly'>
          <input type="text" id="review" name="review" value={review} placeholder="review" className='p-4 border-black border-2 rounded-md my-2' onChange={handleChange}/>
        </div>
        <div className='flex justify-center items-center'>
          <button type="submit" className='p-2 text-black bg-[#f0c14b]
           hover:text-black hover:bg-slate-400
          duration-100 rounded-md hover:p-3'>Submit</button>
        </div>
     </form></>}
  </>
}

export default Review


