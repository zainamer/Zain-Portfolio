import React, { useEffect } from 'react'
import { imgs } from '../assets/assets'
import { Color } from '../assets/assets'

const ThemeChange = ({theme,setTheme}) => {

   useEffect(()=>{
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(theme || (prefersDarkMode ? 'dark' : ' light'))},[])

    useEffect(()=>{
      if(theme === 'dark'){
        document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme',theme)
    },[theme])

  return (
    <div>
      <button className={`flex ${theme==='dark'? Color.darksecbg : Color.lightsecbg} rounded-full`}>
      {theme === "dark" ? (
            <img onClick={()=>setTheme('light')} src={imgs.moon} className=' size-6 md:size-7 p-1 border rounded-full' />
          ) : (
            <img onClick={()=>setTheme('dark')} src={imgs.sun} className='size-6 md:size-7 p-1 rounded-full  border-2' />
          ) }
      </button>
      
    </div>
  )
}

export default ThemeChange
