import React from 'react'
import { imgs } from '../assets/assets'
import { Color } from '../assets/assets'

const About = ({theme}) => {
  return (
    <div id='about' className=' flex flex-col gap-5 items-center sm:flex-row px-10 md:px-20  '>
      <div className="flex flex-col flex-1/2 gap-5">
      <h1 className={`text-4xl md:text-6xl  font-bold  ${theme==='dark' ? Color.darktext : Color.lighttext}`}>About Me</h1>
      <p>I’m a passionate Frontend Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy turning ideas into interactive digital experiences using technologies like React.js, JavaScript, and Tailwind CSS.</p>
      <p>I have worked on multiple frontend projects that helped me improve my skills in UI design, responsive layouts, and component-based development. I’m continuously learning new technologies and exploring better ways to create clean and efficient user experiences.</p>
      <div className="flex gap-5">
         <div className="">
            <h1 className={`text-4xl md:text-6xl  font-bold  ${theme==='dark' ? Color.darktext : Color.lighttext}`}>5+</h1>
            <p className='text-sm md:text-xl'>Technologies mastered</p>
         </div>
         <div className="">
            <h1 className={`text-4xl md:text-6xl  font-bold  ${theme==='dark' ? Color.darktext : Color.lighttext}`}>10+</h1>
            <p className='text-sm md:text-xl'>Projects completed</p>
         </div>
      </div>
      <button className={`w-fit px-2 py-1 ${theme==='dark'? Color.darkbtn : Color.lightbtn }`}>Learn More</button>
      </div>
      <div className="flex-1/2">
         <img src={imgs.about} alt="" />
      </div>
    </div>
  )
}

export default About
