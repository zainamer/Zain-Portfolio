import React from 'react'
import { Color } from '../assets/assets'

const ProjectCard = ({theme,items,index}) => {
  return (
    <div key={index} className={`w-64  ${theme==='dark'? Color.darkshadow : Color.lightshadow} flex flex-col gap-3 p-1.5 rounded-2xl`}>
      <div className="h-30 rounded-2xl overflow-hidden">
      <img className=' hover:scale-[1.05] transition-all duration-300 ' src={items.img} alt="" />
      </div>
      <div className="">
         <h3 className='font-bold'>{items.title}</h3>
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
  )
}

export default ProjectCard
