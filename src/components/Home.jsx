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
          <img src={imgs.insta} alt="" />
          <img src={imgs.github} alt="" />
          <img src={imgs.linkedin} alt="" />
          <img src={imgs.fb} alt="" />
         </div>
         <h1 className='text-xl font-bold'><span className={`${theme==='dark'? Color.darktext : Color.lighttext} text-4xl lg:text-6xl`}>Hi,</span> i'm Shaik Zain Amer</h1>
         <p className='text-center sm:text-start'>a passionate Full-Stack Developer focused on building responsive, scalable, and user-friendly web applications. I enjoy turning ideas into real products using modern technologies like React, JavaScript, Tailwind CSS, and backend development. I'm actively looking for opportunities to grow, collaborate, and contribute to impactful projects.</p>
         <button className={`${theme==='dark'? Color.darkbtn : Color.lightbtn} py-2  w-50 `}>Download CV</button>
         <button className={`${theme==='dark'? Color.darkbtn : Color.lightbtn} py-2  w-50`}>Contact Me</button>
      </div>
      
    </div>
  )
}

export default Home
