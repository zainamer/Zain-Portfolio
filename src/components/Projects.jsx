import React from 'react'
import { Color } from '../assets/assets'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import Title from './Title'

const Projects = () => {

   const data=[
      {
         img:projects.project1,
         title:"E-commerce Platform"
      },
      {
         img:projects.project2,
         title:"Agenct.ai"
      },
      {
         img:projects.project1,
         title:"E-commerce Platform"
      },
   ]



  return (
   <div id='projects' className='px-10 pt-15 '>
   <Title title1={"My"} title2={"Projects"} description={"Here are some of my featured projects, blending modern design with efficient code to deliver polished, user‑friendly experiences."}/>
   <div className="grid items-center place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {data.map((items)=>(
         <ProjectCard items={items}/>
      ))}
     


   </div>
     
 </div>
  )
}

export default Projects
