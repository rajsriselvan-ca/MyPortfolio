import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-800 antialiased selection:bg-cyan-500 selection:text-white'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      </div>
      <Navbar/>
      <div className='container mx-auto px-8 pt-24'>
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      </div>
    </div>
  )
}

export default App