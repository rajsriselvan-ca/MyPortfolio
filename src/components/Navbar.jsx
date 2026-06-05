import { useEffect, useState } from 'react';
import logo from "../assets/RajLogo.png";
import { FaLinkedin, FaGithub, FaGraduationCap, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [overLight, setOverLight] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const light = document.getElementById('light-region');
      if (light) {
        // navbar pill height + offset ~ 70px; flip when light region reaches the navbar
        setOverLight(light.getBoundingClientRect().top <= 70);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkedInClick = () => window.open('https://www.linkedin.com/in/rajsriselvan/', '_blank');
  const handleGithubClick = () => window.open('https://github.com/rajsriselvan-ca?tab=repositories', '_blank');
  const handleLogoClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const iconColor = overLight
    ? 'text-slate-700 hover:text-indigo-600 hover:bg-slate-900/5'
    : 'text-white hover:text-white hover:bg-white/15';
  const iconBase =
    `group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 ${iconColor}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2 transition-all duration-300 ${
          overLight
            ? 'bg-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl border border-white/60'
            : scrolled
              ? 'bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl border border-white/15'
              : 'bg-white/5 backdrop-blur-md border border-white/10'
        }`}
      >
        <button
          onClick={handleLogoClick}
          className="flex flex-shrink-0 items-center gap-2 rounded-full p-1 transition-transform hover:scale-105"
          aria-label="Home"
        >
          <img
            className="h-10 w-10 rounded-full bg-white object-contain p-0.5 shadow-sm"
            src={logo}
            alt="logo"
          />
          <span
            className={`hidden font-display text-lg font-semibold tracking-tight sm:block transition-colors ${
              overLight ? 'text-slate-800' : 'text-white'
            }`}
          >
            Raj<span className="opacity-60">.</span>
          </span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => scrollTo('education')}
            className={iconBase}
            title="Education"
            aria-label="Education"
          >
            <FaGraduationCap className="text-xl" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className={iconBase}
            title="Contact"
            aria-label="Contact"
          >
            <FaEnvelope className="text-xl" />
          </button>
          <button
            onClick={handleLinkedInClick}
            className={iconBase}
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </button>
          <button
            onClick={handleGithubClick}
            className={iconBase}
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
