
import React from 'react'
import Indexitem from './components/Indexitem'
import { getAllEvents } from '@/DUMMY_DATA'
import { useRouter } from 'next/router'


export default function index() {

  const router = useRouter()
  const events = getAllEvents()
  console.log(events)
  return (
    <div className="min-h-screen bg-gray-600 flex flex-col items-center justify-center gap-3">
      {events.map((e)=>(
        <Indexitem event={e}/>
      ))}

    </div>
  )
}
