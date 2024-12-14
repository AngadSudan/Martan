import React from 'react'

function LinkCard({title}) {
  return (
    <div >
        <div className='h-24 mx-auto w-24 rounded-full bg-green-400' />
        <h1 className='my-8 text-center font-semibold text-2xl'>{title}</h1>
    </div>
  )
}

export default LinkCard