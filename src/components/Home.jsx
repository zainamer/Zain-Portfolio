import React from 'react'
import { imgs } from '../assets/assets'
import { Color } from '../assets/assets'

const Home = ({theme}) => {
  return (
    <div className='sm:flex items-center md:h-[80vh] md:w-screen pt-5 sm:pt-20 '>
      <div className="flex sm:flex-1/2   items-center justify-center">
         <img className='h-full w-full object-cover object-top z-0' src={imgs.me} alt="" />
      </div>
      <div className=" p-10 md:p-20 flex sm:flex-1/2  gap-5 flex-col items-center sm:items-start">
         <div className="flex gap-2 h-8 ">
          <a href="https://www.instagram.com/vib3with.zain?igsh=cmlteHdpZjE5bG8x">
          <img className='w-8' src={imgs.insta} alt="" />
          </a>

          <a href="">
          <img className='w-8' src={imgs.github} alt="" />
          </a>
          <a href="">
          <img className='w-8' src={imgs.linkedin} alt="" />
          </a>
          <a href="">
          <img className='w-8' src={imgs.fb} alt="" />
          </a>
         </div>
         <h1 className='md:text-2xl font-bold'><span className={`${theme==='dark'? Color.darktext : Color.lighttext} text-4xl lg:text-6xl`}>Hi,</span > i'm Shaik Zain Amer</h1>
         <p className='text-center sm:text-start text-lg'>I build responsive, modern, and user-friendly web applications using React.js, JavaScript, and Tailwind CSS. Passionate about creating clean UI and interactive user experiences.</p>
         <button className={`${theme==='dark'? Color.darkbtn : Color.lightbtn} py-2  w-50 `}>Download CV</button>
         <button className={`${theme==='dark'? Color.darkbtn : Color.lightbtn} py-2  w-50`}> <a href="#contact">Contact me</a> </button>
      </div>
      
    </div>
  )
}

export default Home
