import React from 'react'
import { imgs } from '../assets/assets'
import { Color } from '../assets/assets'

const Home = () => {
  return (
    
    <div className='w-screen lg:h-screen sm:pt-10 lg:pt-2 sm:flex gap-2 items-center justify-center '>
      
      <div className="h-110 sm:h-full overflow-clip sm:w-1/2">
         <img className='' src={imgs.me} alt="" />
      </div>
      
      <div className="sm:w-1/2 mr-20 ml-5 sm:ml-0 flex flex-col gap-5">
         
         <h1 className='raleway text-nowrap font-light text-2xl lg:text-5xl'><span className="font-bold text-5xl lg:text-9xl text-blue-800">Hi,</span > i'm Shaik Zain Amer</h1>
         
         <p className='text-lg lg:text-2xl font-light josefin'>I build responsive, modern, and user-friendly <br /> web applications using React.js, JavaScript, and Tailwind CSS. <br /> Passionate about creating clean UI and interactive <br />
          user experiences.</p>
         
         <div className=" flex gap-5 *:text-lg *:lg:text-2xl *:border *:border-blue-500 *:px-5 *:hover:bg-blue-500 *:hover:text-black *:font-bold *:text-nowrap">
         <button >Download CV</button>
         
         <button > <a href="#contact">Contact me</a> </button>
         </div>
      </div>
      
    </div>
  )
}

export default Home
