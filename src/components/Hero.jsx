import { useEffect, useRef, useState } from "react";
import { HERO_CONTENT, HERO_ROLES } from "../constants";
import profilePic from "../assets/RajProfilePic.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import Typewriter from "./Typewriter";

const fadeUp = (delay = 0) => ({
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

/* Thunder shock waves — wide glowing rings pulsing outward from the avatar */
const SHOCKS = [
  { delay: "0s",   thickness: 3 },
  { delay: "0.9s", thickness: 2 },
  { delay: "1.8s", thickness: 2 },
];

const Hero = () => {
  const [swallowed, setSwallowed] = useState(false);
  const [reappearing, setReappearing] = useState(false);
  const [avatarHovered, setAvatarHovered] = useState(false);
  const visitedAbout = useRef(false);

  useEffect(() => {
    if (!swallowed) return;
    visitedAbout.current = false;

    const onScroll = () => {
      const about = document.getElementById("about");
      if (!about) return;

      // Phase 1: user scrolls down far enough to see About Me
      if (!visitedAbout.current) {
        const aboutTop = about.getBoundingClientRect().top;
        if (aboutTop <= window.innerHeight * 0.75) {
          visitedAbout.current = true;
        }
        return;
      }

      // Phase 2: user has visited About, now scrolls back near the top — play shockwave first
      if (window.scrollY < 80) {
        window.removeEventListener("scroll", onScroll);
        setReappearing(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [swallowed]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative isolate text-white">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-24 pt-36 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:pt-44">

        {/* ── Text column ── */}
        <div className="w-full max-w-2xl">

          {/* Available badge — bright emerald ping */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-90" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.8)]" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Raj Sri Selvan
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            animate="visible"
            className="mt-4 font-heading text-2xl font-semibold text-white/90 sm:text-3xl"
          >
            <span className="text-zinc-500">I&apos;m a </span>
            <Typewriter words={HERO_ROLES} className="text-white" />
          </motion.div>

          <motion.p
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            variants={fadeUp(0.55)}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black shadow-[0_0_0_0_rgba(255,255,255,0)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            >
              Let&apos;s talk
              <FaArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
            >
              View projects
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp(0.7)}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Dublin, Ireland
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              7 years experience
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              MSc — University of Galway
            </span>
          </motion.div>
        </div>

        {/* ── Avatar + Orbital animation ── */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-shrink-0 items-center justify-center"
          style={{ width: "340px", height: "340px" }}
        >
          <AnimatePresence initial={false}>
            {!swallowed && (
              <motion.div
                key="bh-content"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.2, opacity: 0, rotate: -360, filter: "blur(18px)" }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 1.8,
                    ease: [0.16, 1, 0.3, 1],
                    opacity: { duration: 1.4, ease: "easeOut" },
                    filter: { duration: 1.4, ease: "easeOut" },
                  },
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                  rotate: 540,
                  filter: "blur(12px)",
                  transition: { duration: 1.35, ease: [0.7, 0, 0.84, 0] },
                }}
              >
                {/* Thunder shock waves — wide softly glowing rings pulsing outward */}
                {SHOCKS.map((s, i) => (
                  <div
                    key={i}
                    aria-hidden
                    className="absolute h-56 w-56 animate-thunderShock rounded-full"
                    style={{
                      animationDelay: s.delay,
                      animationPlayState: avatarHovered ? "paused" : "running",
                      border: `${s.thickness}px solid rgba(255,255,255,0.35)`,
                      boxShadow:
                        "0 0 16px 2px rgba(255,255,255,0.20), inset 0 0 10px 1px rgba(255,255,255,0.15)",
                    }}
                  />
                ))}

                {/* Avatar (clickable — triggers black-hole swallow) */}
                <button
                  type="button"
                  onClick={() => setSwallowed(true)}
                  onMouseEnter={() => setAvatarHovered(true)}
                  onMouseLeave={() => setAvatarHovered(false)}
                  aria-label="Click to collapse into the void"
                  className="group relative h-52 w-52 animate-ringPulse rounded-full transition-transform duration-300 hover:scale-[1.03] active:scale-95 sm:h-56 sm:w-56"
                >
                  <div className="h-full w-full rounded-full bg-gradient-to-tr from-zinc-300 via-white to-zinc-400 p-[2px]">
                    <div className="h-full w-full overflow-hidden rounded-full bg-black">
                      <img
                        src={profilePic}
                        alt="Raj Sri Selvan"
                        draggable={false}
                        className="h-full w-full rounded-full object-cover transition-[filter] duration-300 group-hover:brightness-110"
                      />
                    </div>
                  </div>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Black-hole event-horizon burst — fires at peak of swallow */}
          <AnimatePresence>
            {swallowed && !reappearing && (
              <>
                {/* Bright pinpoint flash */}
                <motion.div
                  key="bh-flash"
                  aria-hidden
                  className="pointer-events-none absolute h-5 w-5 rounded-full bg-white"
                  style={{ boxShadow: "0 0 80px 35px rgba(255,255,255,0.9)" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 14, 0], opacity: [0, 0.95, 0] }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut", times: [0, 0.45, 1] }}
                />
                {/* Expanding shockwave ring */}
                <motion.div
                  key="bh-ring"
                  aria-hidden
                  className="pointer-events-none absolute rounded-full border-2 border-white/70"
                  initial={{ width: 0, height: 0, opacity: 0 }}
                  animate={{ width: 360, height: 360, opacity: [0, 0.7, 0] }}
                  transition={{ duration: 1.1, delay: 0.65, ease: "easeOut", times: [0, 0.3, 1] }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Reappear shockwave — fires before profile comes back */}
          <AnimatePresence>
            {reappearing && (
              <>
                {/* Bright burst flash */}
                <motion.div
                  key="ra-flash"
                  aria-hidden
                  className="pointer-events-none absolute h-5 w-5 rounded-full bg-white"
                  style={{ boxShadow: "0 0 80px 35px rgba(255,255,255,0.9)" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 16, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.1, ease: "easeOut", times: [0, 0.4, 1] }}
                />
                {/* First expanding ring — triggers photo reveal on complete */}
                <motion.div
                  key="ra-ring-1"
                  aria-hidden
                  className="pointer-events-none absolute rounded-full border-2 border-white/80"
                  initial={{ width: 0, height: 0, opacity: 0 }}
                  animate={{ width: 400, height: 400, opacity: [0, 0.85, 0] }}
                  transition={{ duration: 1.2, ease: "easeOut", times: [0, 0.25, 1] }}
                  onAnimationComplete={() => {
                    setReappearing(false);
                    setSwallowed(false);
                  }}
                />
                {/* Second trailing ring — purely visual, overlaps with photo reveal */}
                <motion.div
                  key="ra-ring-2"
                  aria-hidden
                  className="pointer-events-none absolute rounded-full border border-white/40"
                  initial={{ width: 0, height: 0, opacity: 0 }}
                  animate={{ width: 440, height: 440, opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1.5, delay: 0.15, ease: "easeOut", times: [0, 0.25, 1] }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Scroll hint — matte black pill ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 flex justify-center pb-10"
      >
        <button
          onClick={() => scrollTo("about")}
          className="group flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-600 transition-all hover:text-zinc-300"
        >
          Scroll
          <span className="flex h-9 w-6 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 transition-all duration-300 group-hover:border-zinc-500 group-hover:bg-zinc-800 group-hover:shadow-[0_0_16px_rgba(255,255,255,0.15)]">
            <FaArrowDown className="animate-bounce text-[10px] text-zinc-600 transition-colors group-hover:text-zinc-200" />
          </span>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
