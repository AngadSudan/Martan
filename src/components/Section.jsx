import React from 'react'
import LinkCard from './LinkCard'
function Section({items,heading}) {
  return (
    <section className='w-full h-screen p-12'>
        <h1 className='text-4xl text-center font-bold'>{heading}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%] mx-auto mt-12'>
          {items.map((game, index) => {
            return (
              <LinkCard title={game} key={index} />
            )
            })}
        </div>
          <div className='flex justify-center'>
            <button className='border-green-500 border-2 transform p-4 hover:bg-green-400 rounded-full hover:text-white -rotate-12 hover:rotate-0 transition-transform duration-300 text-lg font-semibold my-12'>
            Read More
            </button>
          </div>
          
    </section>
  )
}

export default Section