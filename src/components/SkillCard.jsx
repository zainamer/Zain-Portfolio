import React from 'react'
import { Color } from '../assets/assets'

const SkillCard = ({theme,items,index}) => {
  return (
   <div key={index} className={`w-56  ${theme==='dark'? Color.darkshadow : Color.lightshadow} flex flex-col gap-3 p-1.5`}>
      <div className=" flex gap-3 items-center">
       <div className="size-10 bg-gray-800 flex items-center justify-center rounded-2xl">
         <img className='size-6 ' src={items.image} alt="" />
       </div>
       <h3>{items.skillName}</h3>
      </div>
      <div className="">
         <div className="flex justify-between"><p>Proficiency</p><p>{items.percentage}%</p></div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
       <div className="bg-blue-500 h-3 rounded-full" style={{width: `${items.percentage}%`}} ></div>
      </div>
      <hr />
      <div className="w-10 bg-red-500 h-1 mt-2"></div>
   </div>
  )
}

export default SkillCard
