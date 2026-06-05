import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(scrolled > window.innerHeight * 0.8);
      setProgress(max > 0 ? Math.min(1, scrolled / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const r = 22;
  const c = 2 * Math.PI * r;

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="scrollTop"
          onClick={toTop}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          className="group fixed bottom-6 right-6 z-[99] flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)] transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-[0_20px_40px_rgba(99,102,241,0.35)]"
        >
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56" aria-hidden>
            <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <circle
              cx="28"
              cy="28"
              r={r}
              fill="none"
              stroke="url(#stt-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={c * (1 - progress)}
              style={{ transition: 'stroke-dashoffset 120ms linear' }}
            />
            <defs>
              <linearGradient id="stt-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="50%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
          <FaArrowUp className="relative text-base transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
