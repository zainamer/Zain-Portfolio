import React from 'react'
import { Color, imgs, logos } from '../assets/assets'
import SkillCard from './SkillCard'

const Skills = ({theme}) => {

  const skillsData=[
    {
      image: logos.react,
      percentage:"85",
      skillName:"React"
    },
    {
      image: logos.tailwind,
      percentage:"95",
      skillName:"Tailwind"
    },
    {
      image: logos.javascript,
      percentage:"80",
      skillName:"Javascript"
    },
    {
      image: logos.html,
      percentage:"99",
      skillName:"HTML"
    },
    {
      image: logos.css,
      percentage:"98",
      skillName:"CSS"
    },
    {
      image: logos.python,
      percentage:"80",
      skillName:"Python"
    },
    {
      image: logos.java,
      percentage:"70",
      skillName:"Java"
    },
    {
      image: logos.flutter,
      percentage:"50",
      skillName:"Flutter"
    },
    {
      image: logos.angular,
      percentage:"65",
      skillName:"Angular"
    },
    {
      image: logos.bootstrap,
      percentage:"85",
      skillName:"Bootstrap"
    }
  ]


  return (
    <div className='px-10 md:px-20'>
      <div className=" flex flex-col items-center">
      <h1 className='text-4xl lg:text-6xl font-bold'>My <span className={`${theme==='dark'? Color.darktext : Color.lighttext} `}>Skills</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, ducimus recusandae?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {skillsData.map((items,index)=>(
        <SkillCard theme={theme} items={items} index={index} />

        ))}
        
      </div>
        
    </div>
  )
}

export default Skills
