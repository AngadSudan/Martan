import React from 'react'

function Marquee({items}) {
  return (
    <div className='flex bg-black p-4 text-2xl font-semibold text-white space-x-16 overflow-x-hidden w-full'>
        <div className='w-full animate-scroll space-x-16'>
            {items.map((item)=>{
                return (<span className='ml-4 text-nowrap text-2xl'>{item}</span>)
            })}
        </div>
        <div className='w-full animate-scroll space-x-16' aria-hidden="true">
            {items.map((item)=>{
                return (<span className='ml-4 text-nowrap text-2xl'>{item}</span>)
            })}
        </div>
        <div className='w-full animate-scroll space-x-16' aria-hidden="true">
            {items.map((item)=>{
                return (<span className='ml-4 text-nowrap text-2xl'>{item}</span>)
            })}
        </div>

    </div>
  )
}

export default Marquee