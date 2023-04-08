import { useRouter } from 'next/router'
import React from 'react'

export default function indexitem({event}) {
    const router = useRouter()
  return (
    <div className='w-[60%] bg-white rounded-md flex h-[200px]'>

        <img src={event.image}
        className='w-[150px] h-[100%]'
        />
        <div className='p-5 space-y-2'>
          <h2 className='font-bold text-lg'>{event.title}</h2>
          <h3 className='font-bold'>{event.date}</h3>
          <p className='text-gray-400'>{event.description}</p>
          <div className='flex items-end justify-end mt-3'>
            <button className='text-white bg-green-500 rounded-md py-1 px-1' onClick={()=>router.push('/event/'+event.id)}>Explore Events</button>
          </div>
        </div>
      </div>
  )
}
