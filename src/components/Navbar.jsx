import React from 'react';
import logo from "../assets/RajLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/rajsriselvan/', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/rajsriselvan-ca?tab=repositories', '_blank'); 
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDegreeClick = () => {
    const section = document.getElementById('education');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return <nav className='fixed top-0 left-0 right-0 z-[100] flex w-full items-center justify-between bg-slate-800 px-8 py-3 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.4),0_4px_6px_-2px_rgba(0,0,0,0.3)]'>
    <div className='container mx-auto flex items-center justify-between'>
      <div className='flex flex-shrink-0 items-center'>
        <img 
          onClick={handleLogoClick}
          className='mx-2 w-14 cursor-pointer transition-transform transform hover:scale-110' 
          src={logo} 
          alt="logo"
        />
      </div>
      <div className='flex items-center justify-center gap-4 text-4xl'>
        <FaLinkedin
          onClick={handleLinkedInClick}
          className='cursor-pointer text-white transition-transform transform hover:scale-110 hover:text-cyan-400'
        />
        <FaGithub
          onClick={handleGithubClick}
          className='cursor-pointer text-white transition-transform transform hover:scale-110 hover:text-cyan-400'
        />
        <FaGraduationCap
          onClick={handleDegreeClick}
          className='cursor-pointer text-white transition-transform transform hover:scale-110 hover:text-cyan-400'
          title="Degree"
        />
      </div>
    </div>
  </nav>
}

export default Navbar