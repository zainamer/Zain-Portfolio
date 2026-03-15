import React from 'react'
import { Color } from '../assets/assets'

const Skills = ({theme}) => {
  return (
    <div className='px-10 md:px-20'>
      <div className=" flex flex-col items-center">
      <h1 className='text-4xl lg:text-6xl font-bold'>My <span className={`${theme==='dark'? Color.darktext : Color.lighttext} `}>Skills</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, ducimus recusandae?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <div className="w-56 shadow-2xl shadow-amber-400">
         <div className="">
            <img src="" alt="" />
            <h3>Laravel</h3>
         </div>
         <div className="">
            <div className="flex justify-between"><p>Proficiency</p><p>95%</p></div>
         </div>
         <hr />
         <div className="w-10 bg-red-500 h-1 mt-2"></div>
      </div>
      </div>
    </div>
  )
}

export default Skills
