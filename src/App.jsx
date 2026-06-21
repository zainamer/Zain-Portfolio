import Navbar from './components/Navbar'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import Demo from './components/Demo';

const App = () => {

  return (
    <div className='bg-black text-white'>
      <Routes>
        <Route path='/' element={<Hero/>} />
      </Routes>


      {/* <Demo/> */}
    </div>
  )
}

export default App
