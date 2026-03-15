import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

const App = () => {

  const [theme,SetTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme') : 'light');

  return (


    <div className=' dark:bg-black dark:text-white flex flex-col gap-10 '>
      <Navbar theme={theme} setTheme={SetTheme}/>
      <Home theme={theme}/>
      <About theme={theme}/>
      <Skills theme={theme}/>
    </div>
  )
}

export default App
