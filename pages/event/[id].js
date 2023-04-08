import { getEventById } from '@/DUMMY_DATA';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function Event() {
  const router = useRouter();
  const id = router.query.id;
  const [ev, setEv] = useState({});
  // const event;
  useEffect(() => {
   
    const event = getEventById(id);
    setEv(event);
  })

  // console.log(event);
  return (
    <div className='min-h-screen bg-gray-600 flex flex-col  items-center justify-center gap-3 '>
         
       <div className='w-[60%] h-[30%] bg-white rounded-md flex flex-col h-[250px] flex items-center justify-center bg-gray-500'>
        <div className='w-[100%] h-[100px] bg-blue-500'>
          <h1 className='font-bold text-xl flex items-center text-white justify-center py-8'>{ev?.title}</h1>
        </div>
        <div className='w-[60%] h-[100%] bg-slate-800 flex items-center justify-center'>
          <img src={ev?.image} alt=' '
            className='w-[300px] h-[100%] rounded-full border-4'
          />
          <div className='p-5 space-y-2'>
          <p className='text-gray-400'>{ev?.date}</p>
          <p className='text-gray-400'>{ev?.location}</p>
          <div className=' flex items-end justify-end mt-3'>
            <button className='text-white rounded-md bg-green-500 py-1 px-1' onClick={() => router.push('/event/' + ev?.id)}>Explore Event</button>
          </div>
        </div>
        </div>
        <div className=''>
          <h1 className='text-center'> {ev?.description}</h1>
          
        </div>

        
      </div> 
    </div>
  )
}
export default Event;