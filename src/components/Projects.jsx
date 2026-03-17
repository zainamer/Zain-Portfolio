import React from 'react'
import { Color } from '../assets/assets'

const Projects = ({theme}) => {
  return (
   <div className='px-10 md:px-20'>
   <div className=" flex flex-col items-center">
   <h1 className='text-4xl lg:text-6xl font-bold'>My <span className={`${theme==='dark'? Color.darktext : Color.lighttext} `}>Projects</span></h1>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, ducimus recusandae?</p>
   </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
     <div className={`w-72  ${theme==='dark'? Color.darkshadow : Color.lightshadow} flex flex-col gap-3 p-1.5 rounded-2xl`}>
      <img src="" alt="" />
      <div className="">
         <h3 className='font-bold'>E-Commerce Platform</h3>
         <p>Lorem ipsum amet consectetur dicta!</p>
         <div className="flex *:bg-gray-700 *:text-white gap-2 *:rounded-4xl *:px-2 *:text-xs ">
            <span>React</span>
            <span>Node js</span>
            <span>MongoDB</span>
         </div>
      </div>
      <div className=" flex *:flex-1/2 gap-3 *:rounded-md *:py-1">
         <button className='bg-gray-700 text-white '>Code</button>
         <button className='bg-red-600 '>Demo</button>
      </div>
     </div>


   </div>
     
 </div>
  )
}

export default Projects
