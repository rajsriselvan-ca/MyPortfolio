import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import DarkBackdrop from './components/DarkBackdrop';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-slate-800 antialiased selection:bg-white selection:text-black">
      <Navbar />

      {/* Dark surface — Hero + About + Tech share one continuous backdrop with cursor effect */}
      <div className="relative isolate overflow-hidden">
        <DarkBackdrop />
        <Hero />
        <main className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
          <About />
          <Technologies />
        </main>
        {/* Dark tail — extra breathing room before light region */}
        <div className="relative z-10 h-16 sm:h-24" />
      </div>

      {/* Light body */}
      <div id="light-region" className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#f6f7fb]" />
          <div className="absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-[0.25]" />
        </div>
        <main className="mx-auto max-w-6xl px-6 pt-8 sm:px-8">
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default App;
