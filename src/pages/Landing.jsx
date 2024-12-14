import React from 'react'
import {Header,Rating, Hero, Events,Card, Marquee, Section, Footer, CustomerFeedback} from '../components'
import { FcSportsMode } from "react-icons/fc";
function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee items={['Enterprise', 'Sponsors', 'Car-Toys', 'Club Car']} />
      <Section items={["Shooting", "Action", "Simulation", "Cricket", "Football", "Hockey", "VolleyBall","Badminton"]} heading='GAMES' />
      <Section items={["Shooting", "Action", "Simulation", "Cricket", "Football", "Hockey", "VolleyBall","Badminton"]} heading='DEALERS' />
      {/* GET FEATURED  */}
      <section className='w-full h-screen mt-12'>
          <div className='bg-green-500 h-[60%] w-full grid place-items-center'> <h1 className='text-9xl'>Feature Your Brand</h1> </div>
          <div className='flex justify-evenly mt-4'>

          <div className='flex h-[40%] p-2 '>
            <div className=' my-auto border-2 border-gray-300 rounded-xl w-fit p-4'>
              <FcSportsMode className='mx-auto text-7xl text-white' />
              <h1 className='text-3xl text-center font-bold'>18000+ Players</h1>
            </div>
          </div>
          <div className='flex h-[40%] p-2 flex-wrap'>
            <div className=' my-auto border-2 border-gray-300 rounded-xl w-fit p-4'>
              <FcSportsMode className='mx-auto text-7xl text-white' />
              <h1 className='text-3xl text-center font-bold'>18000+ Academics</h1>
            </div>
          </div>
          <div className='flex h-[40%] p-2 flex-wrap'>
            <div className=' my-auto border-2 border-gray-300 rounded-xl w-fit p-4'>
              <FcSportsMode className='mx-auto text-7xl text-white' />
              <h1 className='text-3xl text-center font-bold'>67000+ Coach</h1>
            </div>
          </div>
          <div className='flex h-[40%] p-2 flex-wrap'>
            <div className=' my-auto border-2 border-gray-300 rounded-xl w-fit p-4'>
              <FcSportsMode className='mx-auto text-7xl text-white' />
              <h1 className='text-3xl text-center font-bold'>3800+ Teams</h1>
            </div>
          </div>
          </div>

          <div className='flex justify-center mt-4 '>
            <span className='font-semibold'>EXCELLENT! ⭐⭐⭐⭐⭐</span>
            <span className='opacity-60'>5.0 Rating out of <span className='font-semibold'>5.0</span> based on <span className='font-semibold'>245432</span> Reviews </span>
          </div>
      </section>

      <div className='w-full p-20 flex bg-green-100 '>
        <div className='w-1/2 h-full' />
        <div className='w-1/2 h-full ' >
          <h1 className='text-black text-3xl w-[60%] text-wrap font-bold'>Regiter Now to Join This Community</h1>
          <p className='my-2 opacity-75'>18000+ Playesr, 28000 Academies , 6700 Coached , 3800 Team</p>
          <div className='flex justify-between w-[50%]'>
            <ul>
              <li>✔️ 18000+ Players</li>
              <li>✔️ 18000+ Players</li>
            </ul>
            <ul>
              <li>✔️ 18000+ Players</li>
              <li>✔️ 18000+ Players</li>
            </ul>
          </div>
          <button className='p-4 w-36 mt-4 h-12 bg-green-400 flex justify-center items-center rounded-lg'>
            <a href='#' className='text-black'>Register</a>
          </button>
        </div>

      </div>

      {/* events  */}
      <section className='w-full p-4 min-h-screen mt-12'>
        {/* Upcoming Events  */}
        <div>
          <div className='w-[80%] flex justify-between  mx-auto'> 
            <h1 className='text-5xl mb-12 font-semibold'>Upcoming Events</h1> 
            <div>
              <select className='w-40 h-12 bg-gray-100 rounded-lg mx-2  px-4 focus:outline-none'><option>Select City</option></select>
              <select className='w-40 h-12 bg-green-400 rounded-lg mx-2  px-4 focus:outline-none'><option>Select Sports</option></select>
            </div>
          </div>
          <div className='flex justify-evenly mt-4'>
            <Events src='' heading='lorem ipsum  do aca caboa ncaoxna ' location='Delhi' time='12:00 PM' whatsapp='https://wa.me/919999999999' message='Register Now' />
            <Events src='' heading='lorem ipsum  do aca caboa ncaoxna ' location='Delhi' time='12:00 PM' whatsapp='https://wa.me/919999999999' message='Register Now' />
            <Events src='' heading='lorem ipsum  do aca caboa ncaoxna ' location='Delhi' time='12:00 PM' whatsapp='https://wa.me/919999999999' message='Register Now' />
          </div>
        </div>
        {/* Top Sports  */}
        <div className='my-24'>
          <div className='w-[80%] flex justify-between  mx-auto'> 
            <h1 className='text-5xl mb-8 font-semibold'>Top Rated Sports</h1> 
            <div>
              <select className='w-40 h-12 bg-gray-100 rounded-lg mx-2  px-4 focus:outline-none'><option>Select City</option></select>
              <select className='w-40 h-12 bg-green-400 rounded-lg mx-2  px-4 focus:outline-none'><option>Select Sports</option></select>
            </div>
          </div>
          <div className='flex justify-evenly mt-4'>
            <Rating 
            src='' 
            Review='45 Reviews' 
            Span='1 week ago'
            sports='true'
            Stats='1500+players 1000+academics 5000+coaches 200+teams'
            heading='lorem ipsum  do aca caboa ncaoxna ' 
            location='Delhi' 
            whatsapp='https://wa.me/919999999999' 
            message='Register Now' 
            paid='true'
            fee={1000}
            />
            <Rating 
            src='' 
            Review='45 Reviews' 
            Span='1 week ago'
            sports='true'
            Stats='1500+players 1000+academics 5000+coaches 200+teams'
            heading='lorem ipsum  do aca caboa ncaoxna ' 
            location='Delhi' 
            whatsapp='https://wa.me/919999999999' 
            message='Register Now' 
            paid='true'
            fee={1000}
            />
            <Rating 
            src='' 
            Review='45 Reviews' 
            Span='1 week ago'
            sports='true'
            Stats='1500+players 1000+academics 5000+coaches 200+teams'
            heading='lorem ipsum  do aca caboa ncaoxna ' 
            location='Delhi' 
            whatsapp='https://wa.me/919999999999' 
            message='Register Now' 
            paid='true'
            fee={1000}
            />
            </div>
        </div>
        {/* Top Dealer  */}
        <div className='mt-24'>
          <div className='w-[80%] flex justify-between  mx-auto'> 
            <h1 className='text-5xl mb-8 font-semibold'>Top Dealer</h1> 
            <div>
              <select className='w-40 h-12 bg-gray-100 rounded-lg mx-2  px-4 focus:outline-none'><option>Select City</option></select>
              <select className='w-40 h-12 bg-green-400 rounded-lg mx-2  px-4 focus:outline-none'><option>Select Sports</option></select>
            </div>
          </div>
          <div className='flex justify-evenly mt-4'>
            <Rating 
            src='' 
            Review='45 Reviews' 
            Span='1 week ago'
            heading='lorem ipsum  do aca caboa ncaoxna ' 
            location='Delhi' 
            whatsapp='https://wa.me/919999999999' 
            message='Register Now' 
            paid='true'
            fee={1000}
            />
            <Rating 
            src='' 
            Review='45 Reviews' 
            Span='1 week ago'
            heading='lorem ipsum  do aca caboa ncaoxna ' 
            location='Delhi' 
            whatsapp='https://wa.me/919999999999' 
            message='Register Now' 
            paid='true'
            fee={1000}
            />
            <Rating 
            src='' 
            Review='45 Reviews' 
            Span='1 week ago'
            heading='lorem ipsum  do aca caboa ncaoxna ' 
            location='Delhi' 
            whatsapp='https://wa.me/919999999999' 
            message='Register Now' 
            paid='true'
            fee={1000}
            />
            
            </div>
        </div>
        <div className=' flex justify-center'>
            <button className='border-green-500 border-2 transform p-4 hover:bg-green-400 rounded-full hover:text-white -rotate-12 hover:rotate-0 transition-transform duration-300 text-lg font-semibold my-12'>
            Read More
            </button>
          </div>
      </section>

      <div className='flex'>
        <div className='w-1/2 h-full bg-slate-500 p-7 pl-9'>
          <h1 className='text-green-400  mx-auto text-3xl my-8'> I Am Dealer</h1>
          <p className=' mx-auto text-wrap text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde fugiat minus porro molestias consectetur distinctio voluptas, ex sunt, architecto esse iste numquam repellendus nostrum a nemo possimus, mollitia ipsa?</p>
          <button className=' border-2 border-white mr-auto p-4 w-36 mt-4 h-12 flex justify-center items-center rounded-lg'>
            <a href='#' className='text-white'>Register</a>
          </button>
        </div>
        <div className='w-1/2 h-full bg-green-500 p-7 pl-9'>
          <h1 className='text-green-400  mx-auto text-3xl my-8'> I Am Academy</h1>
          <p className=' mx-auto text-wrap text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde fugiat minus porro molestias consectetur distinctio voluptas, ex sunt, architecto esse iste numquam repellendus nostrum a nemo possimus, mollitia ipsa?</p>
          <button className=' border-2 border-white mr-auto p-4 w-36 mt-4 h-12 flex justify-center items-center rounded-lg'>
            <a href='#' className='text-white'>Register</a>
          </button>
        </div>
      </div>

      <div className='flex p-8'>
        <div className='w-1/2 bg-green-300 p-7 pl-9'>
        </div>

      {[
            {
              rating: 5,
              feedback: "Excellent platform for sports enthusiasts!",
              name: "John Doe",
              title: "Professional Athlete"
            },
            {
              rating: 4,
              feedback: "Great experience, but could use more features.",
              name: "Jane Smith",
              title: "Coach"
            }
          ].map((feedback, index) => {
            return(
              <CustomerFeedback rating={4} feedback={"lorem ispusm capucluatesfs  "} />
            )
          })
        }
      </div>

      {/* blog  */}
      <section className='w-full p-4 min-h-screen mt-12'>
        <h1 className='text-4xl mb-8 text-center font-bold'>Latest Blog</h1>
        <div className='w-full p-8 flex justify-evenly'>
          {/* image title content  */}
          {[
            {
              image:'#',
              title:'lorem ipsum',
              content:'lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde fugiat minus porro molestias consectetur distinctio voluptas, ex sunt, architecto esse iste numquam repellendus nostrum a nemo possimus, mollitia ipsa?'
            },
            {
              image:'#',
              title:'lorem ipsum',
              content:'lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde fugiat minus porro molestias consectetur distinctio voluptas, ex sunt, architecto esse iste numquam repellendus nostrum a nemo possimus, mollitia ipsa?'
            },
            {
              image:'#',
              title:'lorem ipsum',
              content:'lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde fugiat minus porro molestias consectetur distinctio voluptas, ex sunt, architecto esse iste numquam repellendus nostrum a nemo possimus, mollitia ipsa?'
            },
          ].map((blog, index) => {
            return(
              <Card image={blog.image} title={blog.title} content={blog.content} />
            )
          })} 
        </div>
        <div className=' flex justify-center'>
            <button className='border-green-500 border-2 transform p-4 hover:bg-green-400 rounded-full hover:text-white -rotate-12 hover:rotate-0 transition-transform duration-300 text-lg font-semibold my-12'>
            Read More
            </button>
        </div>
      </section>

    
      <Footer/>
      
    </>
  )
}

export default Landing