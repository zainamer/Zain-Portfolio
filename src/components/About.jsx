import React from 'react'
import { imgs } from '../assets/assets'
import { Color } from '../assets/assets'

const About = ({theme}) => {
  return (
    <div id='about' className=' flex flex-col gap-5 items-center sm:flex-row px-10 md:px-20  '>
      <div className="flex flex-col flex-1/2 gap-5">
      <h1 className={`text-4xl md:text-6xl  font-bold  ${theme==='dark' ? Color.darktext : Color.lighttext}`}>About Me</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus a temporibus magnam expedita aspernatur, sed omnis, asperiores at rerum commodi odit distinctio in corrupti delectus voluptates voluptatum nulla excepturi iure ipsa! Vitae, voluptatum!</p>
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
