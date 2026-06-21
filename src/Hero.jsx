import React, { useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const Hero = () => {

const [theme,SetTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme') : 'light');   

  return (
    <div>
      <Navbar theme={theme} setTheme={SetTheme}/>
      <Home theme={theme}/>
      <About theme={theme}/>
      <Skills theme={theme}/>
      <Projects theme={theme}/>
      <Contact theme={theme}/>
    </div>
  )
}

export default Hero
