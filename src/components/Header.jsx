import React, { useState } from 'react'
import Button from './button'
import { FaMagnifyingGlass , FaPhone } from "react-icons/fa6";
import { NavLink } from 'react-router';

function Header() {
    const [Search, setSearch]= useState('');
  return (
    <div className='h-[7rem]'>
        <div className=' h-[60%] p-2 flex py-auto justify-evenly border-2 border-gray-100 '>
            <div className='w-fit p-2 h-fit my-auto text-4xl font-semibold'>Martan</div>
            <form className='my-auto w-[65%] '>
                <input 
                type='text' 
                value={Search} 
                onChange={(e)=>{setSearch(e.target.value)}} 
                placeholder='Search'
                className='p-2 w-[55%] my-auto bg-gray-100 rounded-md'
                />
                <button 
                type='Submit'
                className=' rounded-md p-2 bg-black'
                >
                    <FaMagnifyingGlass color='white' />
                </button>
            </form>
            <Button classname='w-fit text-md' text='Counselling' />
        </div>
        <div className='h-[30%] mt-2 flex justify-between w-full'>
            <div className=' w-[70%] text-xl font-normal flex justify-evenly'>
                <p className='text-[#46D993]'>Home</p>
                <p>Sports</p>
                <p>City</p>
                <p>Academy</p>
                <p>Events</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>
            <div className='flex w-[20%] pb-1'>
                <FaPhone className='my-auto' />
                <div className='border-l-2 ml-2 pl-2 border-gray-300'>
                    <p className='text-xs opacity-70'>For more queries</p>
                    <p className='text-xs font-semibold'>+91 - xxxxxxxxx</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header