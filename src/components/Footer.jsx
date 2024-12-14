import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

function Footer(){
    return (
        <footer className='w-full h-[50rem] mt-4'>
            <div className=' flex flex-row-reverse bg-green-400 h-[30%]'>
                <div className='w-1/2 p-4'>
                    <h1 className='text-white font-semibold text-4xl mt-4 mb-2 text-center'>JOIN MARTAN NOW</h1>
                    <h3 className='text-white font-semibold text-2xl text-center'>EXPLORE UNIQUE SPORTS IN REAL ESTATE MARKET</h3>
                    <div className='flex justify-evenly w-[80%] mx-auto my-4'>
                        <div className='bg-black h-16 w-36 text-white rounded-br-full px-2 py-4'>73401471074</div>
                        <div className='bg-white h-16 w-36 rounded-br-full px-2 py-4'>Contact Us</div>
                    </div>
                </div>
            </div>
            <div className='h-[70%] bg-black p-12'> 
                <div className='h-[85%]' >
                    <div className='h-[90%] flex justify-between text-white'>
                        <div className='flex justify-evenly w-2/3 my-12'>
                            <div>
                                <h1 className='text-3xl font-semibold'>
                                    About <span className='text-green-400'>Company</span>
                                </h1>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Blogs</li>
                                    <li>Tournaments</li>
                                    <li>Terms & Condition</li>
                                    <li>Contact us</li>

                                </ul>
                            </div>
                            <div>
                                <h1 className='text-3xl font-semibold'>
                                    Top <span className='text-green-400'>Sports</span>
                                </h1>
                                <ul>
                                    <li>Cricket</li>
                                    <li>Football</li>
                                    <li>BasketBall</li>
                                    <li>Badminton</li>
                                    <li>Kabaddi</li>
                                    <li>MMA us</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-3xl font-semibold'>
                                    Top <span className='text-green-400'>Cities</span>
                                </h1>
                                <ul>
                                    <li>Delhi</li>
                                    <li>Banglore</li>
                                    <li>Gurgaon</li>
                                    <li>Noida</li>
                                    <li>Hyderabad</li>
                                    <li>Kolkata</li>

                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col mt-16 w-fit'>
                            <p className='flex text-3xl mb-4'>
                                <FaEnvelope className='my-auto mx-4' /> Stay-Up-To-Date
                            </p>
                            <h1 className='text-xl w-2/3 mb-4 text-wrap'>Get latest Blogs, EBooks, Events and Whitepapers</h1>
                            <button className='bg-green-300 w-1/3 text-black rounded-md  p-2 font-semibold text-xl'>Login Now</button>
                        </div>
                    </div>
                    <div className='text-white h-[10%] flex justify-between'>
                        <div className='flex justify-evenly w-2/3'>
                            <h1 className='text-4xl text-green-300'>MARTAN</h1>
                            <div className='flex '>
                                <FaPhone className='text-3xl'/>
                                <div className='border-l-2 ml-2 pl-2 border-gray-300'>
                                    <h1>To More Inquiry</h1>
                                    <p>5720395724</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <FaEnvelope className='text-3xl'/>
                                <div className='border-l-2 ml-2 pl-2 border-gray-300'>
                                    <h1>To Send Email</h1>
                                    <p>martan@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <p>Advertise With Us</p>
                    </div>
                </div>
                <div className='flex border-t-2 pt-3  border-gray-300 h-[10%] mt-8'>
                    <div className='text-5xl text-green-400 w-2/3'>
                        <span className='text-white' >&copy; 2024 </span>
                        MARTAN
                    </div>
                    <div className='flex justify-evenly text-green-400 w-1/3'>
                        {['F','L','I','T'].map(
                            (icons)=>{
                                return (
                                    <div className='rounded-full w-9 h-9 border-2 border-white grid place-items-center'>
                                        {icons}
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;