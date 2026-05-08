import React from 'react'
import { Color, imgs, logos } from '../assets/assets'
import SkillCard from './SkillCard'
import Title from './Title'

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
    <div id='skills' className='px-10 md:px-20'>
      <Title theme={theme} title1={"My"} title2={"Skills"} description={"These are the technical and creative skills I use to build responsive, user‑friendly web applications and solve real‑world problems."}/>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {skillsData.map((items,index)=>(
        <SkillCard theme={theme} items={items} index={index} />

        ))}
        
      </div>
        
    </div>
  )
}

export default Skills
