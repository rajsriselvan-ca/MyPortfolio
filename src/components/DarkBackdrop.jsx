import { useEffect, useRef } from 'react';

const DarkBackdrop = () => {
  const ref = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    el.style.setProperty('--mx', '50%');
    el.style.setProperty('--my', '30%');

    const onMove = (e) => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const rect = parent.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        el.style.setProperty('--my', `${e.clientY - rect.top}px`);
      });
    };

    parent.addEventListener('mousemove', onMove);
    return () => {
      parent.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {/* Base dark color */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Cursor reflection */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(380px circle at var(--mx) var(--my), rgba(255,255,255,0.09), transparent 55%), radial-gradient(120px circle at var(--mx) var(--my), rgba(255,255,255,0.16), transparent 60%)',
        }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.17]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at var(--mx) var(--my), #000 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at var(--mx) var(--my), #000 30%, transparent 80%)',
        }}
      />

      {/* Bottom edge fade into light body */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f6f7fb]" />
    </div>
  );
};

export default DarkBackdrop;
