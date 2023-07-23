import React,{useState,useEffect} from 'react'

const AllReviews = () => {
  const [data,setData]=useState(null)

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/v1/reviews", {
        method: "GET",
        headers: {
          Authorization: "",
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
      fetchReviews()
  },[])
  return <>
            {
          data!=null && data.data.length!=0?<div className='grid grid-cols-2 gap-4 p-3'>{
          data.data.map((e)=>{
                const {username,pName,review}=e
                return <article id={username} 
                 className='rounded-md shadow-xl p-2'>
                      <div className='flex p-2'>
                        <div>
                            <h1 className='text-xl  my-1  text-[#37475A]'>
                              {pName}</h1>
                            <h1 className='text-xl my-2 text-center'>{review}</h1>
                            <div className='flex'>
                                <span >review by</span>
                               <h1 className='text-2xl font-bold mx-3'>{username}</h1>
                            </div>
                        </div>
                      </div>
                 </article>
          })
      }</div>:<></>}
    </>
}

export default AllReviews