import React from 'react'
import {AiOutlineAim } from 'react-icons/ai'

function Hero() {
  return (
    <div className='bg-green-100 h-screen w-full flex justify-center items-center'>
        <div className='mx-4 p-8'>
            <h1 className='w-[85%] text-7xl text-wrap font-bold'>
                Register As A Coach, Academy
            </h1>
            <p className='text-2xl my-3 text-wrap text-gray-500'>
                18000+ PLAYERS, 28000 ACADEMICS, 67000 COACHES, 38000 TEAMS
            </p>
            <form className=' flex'>
                <input 
                    type='text' 
                    placeholder='Search/Academy/Coach/Player' 
                    className='w-80 h-16 bg-white pl-4 rounded-l-full' 
                />
                <button className='w-20 h-16 bg-[#46D993] font-bold p-1 rounded-r-full '>
                    <AiOutlineAim className='text-5xl' />
                </button>
            </form>
            <div className='flex mt-8'>
                <div className='mr-8' >
                    {/* <img src='' alt='Google' className='w-1/2' /> */}
                   <h1>Google ⭐⭐⭐⭐⭐</h1>
                    <span>Top Rating 5.0 | 3408 Reviews</span>
                </div>
                <div className='border-l-2 pl-2 border-gray-400'>
                    {/* <img src='' alt='Google' className='w-1/2' /> */}
                    <h1>Google ⭐⭐⭐⭐⭐</h1>
                    <span>Top Rating 5.0 | 3408 Reviews</span>
                </div>
            </div>
        </div>
        <form className='mr-24 p-2 bg-white rounded-md w-[35%]' >
            <h1 className='text-2xl font-bold mb-4'>Find Your Best Choice</h1>
            <div className='grid grid-cols-2 gap-4 w-[90%]'>
                <div className='flex items-center bg-white rounded-full hover:border-b-4 hover:border-x-2 border-b-green-200 p-2'>
                    <p className='p-4 text-center font-medium'>Academy</p>
                </div>
                <div className='flex items-center bg-white rounded-full hover:border-b-4 hover:border-x-2 border-b-green-200 p-2'>
                    <p className='p-4 text-center font-medium'>Coach</p>
                </div>
                <div className='flex items-center bg-white rounded-full hover:border-b-4 hover:border-x-2 border-b-green-200 p-2'>
                    <p className='p-4 text-center font-medium'>Counsellor</p>
                </div>
                <div className='flex items-center bg-white rounded-full hover:border-b-4 hover:border-x-2 border-b-green-200 p-2'>
                    <p className='p-4 text-center font-medium'>Dealer</p>
                </div>
            </div>
            <div className='w-[90%] mx-auto mb-4'>
                <label htmlFor="city" className='block mb-2 font-medium'>City</label>
                <select id="city" className="w-full h-12 bg-gray-100 rounded-full px-4 focus:outline-none">
                    <option>Select city name</option>
                </select>
            </div>
            <div className='w-[90%] mx-auto'>
                <label htmlFor="sports" className='block mb-2 font-medium'>Sports</label>
                <select id="sports" className="w-full h-12 bg-gray-100 rounded-full px-4 focus:outline-none">
                    <option>Select sports name</option>
                </select>
            </div>
            <button type="submit" className="bg-[#46D993] text-white font-medium py-3 px-6 rounded-full w-[70%] mt-6 mx-16">
                Search
            </button>
        </form>

    </div>
  )
}

export default Hero