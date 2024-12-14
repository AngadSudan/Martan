import React from 'react'

function Rating({src, heading,paid=false,fee,sports=false, location,Review,Span, Stats}) {
  return (
      <div className=' p-4 w-1/3 mx-1 justify-between bg-gray-100 '>
        <div className='w-full rounded-lg h-36 bg-green-300'></div>
          <p className='text-xl mt-1 font-semibold text-wrap'>{heading}</p>
          <p className='text-lg opacity-60 text-wrap'>{location}</p>
          <div className='flex justify-between my-3 items-center'>
            <div>
              <p className='text-lg opacity-60  text-wrap'>{Review}</p>
              <p className='text-lg opacity-60  text-wrap'>{Span}</p>
            </div>
            {paid && <p className='opacity-60 font-bold'>Monthly Fees - {fee}</p>}
          </div>
        <p className='font-semibold text-xl mt-3'>Excellent! ⭐⭐⭐⭐⭐</p>
        {sports && 
          <p className='text-normal w-[90%] opacity-60  text-wrap'>{Stats}</p>
        }
        <div className='flex flex-row-reverse mt-4 relative bottom-1 right-1'>
            <div className='w-12 h-12 rounded-full mx-2 bg-green-300' />
            <div className='w-12 h-12 rounded-full mx-2 bg-green-300' />
        </div>
    </div>
  )
}

export default Rating