import React from 'react';
import logo from "../assets/RajLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/rajsriselvan/', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/rajsriselvan-ca?tab=repositories', '_blank'); 
  };

  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
    <img className='mx-2 w-14' src={logo} alt="logo"/>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-4xl'>
        <FaLinkedin
          onClick={handleLinkedInClick}
          className='cursor-pointer transition-transform transform hover:scale-110'
        />
        <FaGithub
          onClick={handleGithubClick}
          className='cursor-pointer transition-transform transform hover:scale-110'
        />
    </div>
  </nav>
}

export default Navbar