import React from 'react'
import { Color } from '../assets/assets'

const Title = ({theme,title1,title2,description}) => {
  return (
   <div className=" flex flex-col items-center">
      <h1 className='text-4xl lg:text-6xl font-bold'>{title1} <span className={`${theme==='dark'? Color.darktext : Color.lighttext} `}>{title2}</span></h1>
      <p className='text-center'>{description}</p>
   </div>
  )
}

export default Title
