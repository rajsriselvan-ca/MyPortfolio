import { useEffect, useState } from 'react';

const Typewriter = ({
  words = [],
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1400,
  className = '',
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

  const current = words[index % words.length] || '';

  return (
    <span className={className}>
      {current.substring(0, subIndex)}
      <span className="ml-0.5 inline-block w-[2px] -mb-1 h-[1em] bg-current align-baseline animate-blink" />
    </span>
  );
};

export default Typewriter;
