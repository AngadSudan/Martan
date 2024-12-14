import React from 'react'

function Events({src, heading, location, time, whatsapp, message}) {
  return (
    <div className='p-8 h-fit rounded-lg mx-2 my-2 bg-gray-50 w-1/2'>
        <div className='w-full rounded-lg h-36 bg-green-300'></div>
        <p className='text-2xl font-semibold text-wrap'>{heading}</p>
        <p className='text-xl opacity-60 text-wrap'>{location}</p>
        <p className='text-xl opacity-60 text-wrap'>{time}</p>

        <div className='flex flex-row-reverse mt-4'>
            <div className='w-8 h-8 rounded-full mx-2 bg-green-300' />
            <div className='w-8 h-8 rounded-full mx-2 bg-green-300' />
        </div>
    </div>
  )
}

export default Events