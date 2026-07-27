import { useEffect, useRef, useState } from "react";
import { HERO_CONTENT, HERO_ROLES } from "../constants";
import profilePic from "../assets/RajProfilePic.jpg";
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
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

const DATA_NODES = [
  { x: "12%", y: "28%", delay: "0s", size: "h-1.5 w-1.5" },
  { x: "82%", y: "20%", delay: "0.7s", size: "h-2 w-2" },
  { x: "91%", y: "63%", delay: "1.4s", size: "h-1.5 w-1.5" },
  { x: "68%", y: "91%", delay: "2.1s", size: "h-1 w-1" },
  { x: "18%", y: "81%", delay: "2.8s", size: "h-2 w-2" },
  { x: "5%", y: "53%", delay: "3.5s", size: "h-1 w-1" },
];

const MAX_CHARGE = 7;
const CHARGE_DECAY_DELAY = 850;
const CHARGE_DECAY_STEP = 360;
const PROFILE_REVEAL_DURATION = 5000;
const ORBIT_SPEED_MULTIPLIERS = [1, 1.3, 1.8, 2.6, 3.8, 5.8, 9.5];
const SILVER_SHARDS = Array.from({ length: 38 }, (_, index) => {
  const angle = (index / 38) * Math.PI * 2 + (index % 5) * 0.08;
  const distance = 112 + (index % 7) * 13;
  const startDistance = 12 + (index % 7) * 12;

  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    startX: Math.cos(angle) * startDistance,
    startY: Math.sin(angle) * startDistance,
    width: 15 + (index % 5) * 5,
    height: 18 + (index % 4) * 7,
    rotate: 140 + (index % 8) * 37,
    delay: (index % 9) * 0.035,
    clipPath: index % 3 === 0
      ? "polygon(50% 0, 100% 100%, 0 72%)"
      : index % 3 === 1
        ? "polygon(15% 0, 100% 18%, 72% 100%, 0 68%)"
        : "polygon(50% 0, 100% 42%, 68% 100%, 8% 78%, 0 22%)",
    color: index % 3 === 0
      ? "linear-gradient(135deg, #ffffff 0%, #d4d4d8 34%, #71717a 72%, #27272a 100%)"
      : index % 3 === 1
        ? "linear-gradient(145deg, #f4f4f5 0%, #a1a1aa 42%, #52525b 76%, #18181b 100%)"
        : "linear-gradient(125deg, #e0f2fe 0%, #e4e4e7 38%, #71717a 70%, #3f3f46 100%)",
  };
});

const CRYSTAL_DRIFT = {
  x: [0, -92, -42, 84, 108, 28, -76, 0],
  y: [0, -58, -105, -82, 26, 94, 63, 0],
  rotate: [0, -28, 22, 74, 128, 204, 292, 360],
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [chargeLevel, setChargeLevel] = useState(0);
  const [phase, setPhase] = useState("orbiting");
  const [pulseKey, setPulseKey] = useState(0);
  const chargeRef = useRef(0);
  const resetTimer = useRef(null);
  const reduceMotion = useReducedMotion();
  const energized = chargeLevel > 0;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const orbitOneRotation = useMotionValue(12);
  const orbitTwoRotation = useMotionValue(-48);
  const orbitThreeRotation = useMotionValue(28);
  const orbitTargetMultiplier = useRef(1);
  const orbitVelocity = useRef({
    one: 360 / 15,
    two: -360 / 19,
    three: 360 / 24,
  });
  const tiltXRaw = useTransform(pointerY, [-1, 1], [8, -8]);
  const tiltYRaw = useTransform(pointerX, [-1, 1], [-8, 8]);
  const tiltX = useSpring(tiltXRaw, { stiffness: 180, damping: 22 });
  const tiltY = useSpring(tiltYRaw, { stiffness: 180, damping: 22 });
  const lensX = useTransform(pointerX, (value) => value * 68);
  const lensY = useTransform(pointerY, (value) => value * 68);
  const portraitX = useTransform(pointerX, (value) => value * -7);
  const portraitY = useTransform(pointerY, (value) => value * -7);

  useEffect(() => {
    orbitTargetMultiplier.current = phase === "overdrive"
      ? 26
      : phase === "fracturing"
        ? 30
        : phase === "shattering"
          ? 24
          : ORBIT_SPEED_MULTIPLIERS[chargeLevel] ?? 1;
  }, [chargeLevel, phase]);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;

    const deltaSeconds = Math.min(delta, 50) / 1000;
    const speedMultiplier = orbitTargetMultiplier.current;
    const accelerationResponse = speedMultiplier >= 24 ? 3.6 : 4.8;
    const velocityBlend = 1 - Math.exp(-deltaSeconds * accelerationResponse);
    const targetOne = (360 / 15) * speedMultiplier;
    const targetTwo = (-360 / 19) * speedMultiplier;
    const targetThree = (360 / 24) * speedMultiplier;

    orbitVelocity.current.one += (targetOne - orbitVelocity.current.one) * velocityBlend;
    orbitVelocity.current.two += (targetTwo - orbitVelocity.current.two) * velocityBlend;
    orbitVelocity.current.three += (targetThree - orbitVelocity.current.three) * velocityBlend;

    orbitOneRotation.set((orbitOneRotation.get() + orbitVelocity.current.one * deltaSeconds) % 360);
    orbitTwoRotation.set((orbitTwoRotation.get() + orbitVelocity.current.two * deltaSeconds) % 360);
    orbitThreeRotation.set((orbitThreeRotation.get() + orbitVelocity.current.three * deltaSeconds) % 360);
  });

  useEffect(() => () => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
  }, []);

  useEffect(() => {
    if (phase !== "revealing") return undefined;

    const revealTimer = window.setTimeout(() => {
      setPhase("orbiting");
    }, PROFILE_REVEAL_DURATION);

    return () => window.clearTimeout(revealTimer);
  }, [phase]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePointerMove = (event) => {
    if (phase !== "orbiting") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width * 2 - 1);
    pointerY.set((event.clientY - rect.top) / rect.height * 2 - 1);
  };

  const resetPointer = () => {
    setIsHovered(false);
    pointerX.set(0);
    pointerY.set(0);
  };

  const chargeSignal = () => {
    if (phase !== "orbiting") return;

    const nextCharge = Math.min(chargeRef.current + 1, MAX_CHARGE);

    if (resetTimer.current) window.clearTimeout(resetTimer.current);
    chargeRef.current = nextCharge;
    setPulseKey((current) => current + 1);
    setChargeLevel(nextCharge);

    if (nextCharge === MAX_CHARGE) {
      setPhase("overdrive");
      return;
    }

    const decayCharge = () => {
      const decayedCharge = Math.max(0, chargeRef.current - 1);
      chargeRef.current = decayedCharge;
      setChargeLevel(decayedCharge);

      if (decayedCharge > 0) {
        resetTimer.current = window.setTimeout(decayCharge, CHARGE_DECAY_STEP);
      } else {
        setPulseKey(0);
      }
    };

    resetTimer.current = window.setTimeout(decayCharge, CHARGE_DECAY_DELAY);
  };

  const beginReform = () => {
    if (phase !== "crystal") return;
    setPhase("reforming");
    resetPointer();
  };

  const completeShatter = () => {
    resetPointer();
    setPhase("crystal");
  };

  const completeReform = () => {
    chargeRef.current = 0;
    setChargeLevel(0);
    setPulseKey(0);
    resetPointer();
    setPhase("revealing");
  };

  const statusText = phase === "overdrive"
    ? "Critical state attained"
    : phase === "fracturing"
      ? "silver surface · fracturing"
    : phase === "shattering"
      ? "crystal fracture"
    : phase === "crystal"
      ? "click crystal to fuse"
      : phase === "reforming"
        ? "nuclear fusion · rebuilding"
        : phase === "fusing"
          ? "fusion lock · silver restored"
        : phase === "revealing"
          ? "identity flash · cycle locked"
        : chargeLevel === 0
          ? "rapid click ×7 to ignite"
          : chargeLevel === MAX_CHARGE - 1
            ? "critical · one more click"
            : `click chain ${chargeLevel} / ${MAX_CHARGE}`;

  return (
    <section id="home" className="relative isolate text-white">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-24 pt-36 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:pt-44">
        <div className="w-full max-w-2xl">
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

        <motion.div
          initial={{ scale: 0.78, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-[340px] w-[340px] flex-shrink-0 items-center justify-center"
        >
          <motion.div
            data-energized={energized}
            data-energy-level={chargeLevel}
            data-phase={phase}
            data-hovered={isHovered}
            onPointerMove={handlePointerMove}
            onPointerEnter={() => {
              if (phase === "orbiting") setIsHovered(true);
            }}
            onPointerLeave={resetPointer}
            style={{
              rotateX: reduceMotion || phase !== "orbiting" ? 0 : tiltX,
              rotateY: reduceMotion || phase !== "orbiting" ? 0 : tiltY,
              transformStyle: "preserve-3d",
            }}
            className="neural-constellation group relative h-[330px] w-[330px] rounded-full"
          >
            <span className="sr-only" aria-live="polite">
              {statusText}
            </span>

            <div aria-hidden className="neural-ambient absolute inset-[13%] rounded-full" />
            <div aria-hidden className="neural-grid absolute inset-[8%] rounded-full" />

            <motion.div
              aria-hidden
              className="neural-orbit neural-orbit-one"
              style={{ rotate: orbitOneRotation }}
            >
              <span className="neural-satellite" />
            </motion.div>
            <motion.div
              aria-hidden
              className="neural-orbit neural-orbit-two"
              style={{ rotate: orbitTwoRotation }}
            >
              <span className="neural-satellite" />
            </motion.div>
            <motion.div
              aria-hidden
              className="neural-orbit neural-orbit-three"
              style={{ rotate: orbitThreeRotation }}
            >
              <span className="neural-satellite" />
            </motion.div>

            <svg
              aria-hidden
              viewBox="0 0 330 330"
              className="neural-connections pointer-events-none absolute inset-0 h-full w-full"
            >
              <path d="M39 93 L84 52 L270 66 L303 208 L224 300 L59 267 Z" />
              <path d="M84 52 L134 113 L270 66 M303 208 L233 192 L224 300 M59 267 L99 206 L39 93" />
            </svg>

            {DATA_NODES.map((node, index) => (
              <span
                aria-hidden
                key={index}
                className={`neural-data-node absolute ${node.size}`}
                style={{ left: node.x, top: node.y, animationDelay: node.delay }}
              />
            ))}

            <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <motion.span
                className="neural-cursor-lens h-24 w-24 rounded-full"
                style={{ x: lensX, y: lensY }}
              />
            </div>

            <div aria-hidden className="neural-reticle absolute inset-[14%] rounded-full" />

            {pulseKey > 0 && phase === "orbiting" && (
              <div key={pulseKey} aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="absolute rounded-full border border-cyan-200/80"
                  initial={{ width: 170, height: 170, opacity: 0.9 }}
                  animate={{ width: 350, height: 350, opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="absolute rounded-full border border-violet-300/60"
                  initial={{ width: 190, height: 190, opacity: 0.75 }}
                  animate={{ width: 310, height: 310, opacity: 0 }}
                  transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
                />
              </div>
            )}

            {phase === "overdrive" && (
              <motion.span
                aria-hidden
                className="overdrive-vortex pointer-events-none absolute inset-[4%] rounded-full"
                initial={{ opacity: 0, scale: 0.86 }}
                animate={{ opacity: [0, 1, 0.82, 1], scale: [0.86, 1.05, 0.98, 1.08], rotate: 720 }}
                transition={{ duration: reduceMotion ? 0.7 : 2.8, ease: "linear", times: [0, 0.2, 0.68, 1] }}
                onAnimationComplete={() => setPhase("fracturing")}
              />
            )}

            {phase === "fracturing" && (
              <motion.span
                aria-hidden
                className="fracture-flash pointer-events-none absolute left-1/2 top-1/2 z-30 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full"
                initial={{ scale: 0.05, opacity: 0 }}
                animate={{ scale: [0.05, 0.2, 1.45], opacity: [0, 0.35, 1] }}
                transition={{ duration: reduceMotion ? 0.45 : 0.95, times: [0, 0.55, 1], ease: "easeIn" }}
                onAnimationComplete={() => setPhase("shattering")}
              />
            )}

            <AnimatePresence>
              {(phase === "orbiting" || phase === "overdrive" || phase === "fracturing" || phase === "revealing") && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    key="charged-avatar"
                    type="button"
                    aria-label={phase === "revealing"
                      ? "Profile revealed temporarily; charging is locked"
                      : `Rapid charge gray atom, level ${chargeLevel} of ${MAX_CHARGE}`}
                    onClick={chargeSignal}
                    disabled={phase !== "orbiting"}
                    whileTap={reduceMotion || phase !== "orbiting" ? undefined : { scale: 0.96 }}
                    animate={phase === "fracturing"
                      ? {
                          scale: [1, 1.025, 1.045, 1, 1],
                          opacity: [1, 1, 1, 0, 0],
                          filter: [
                            "brightness(1)",
                            "brightness(1.2)",
                            "brightness(5.2)",
                            "brightness(2.4) blur(5px)",
                            "brightness(1) blur(8px)",
                          ],
                        }
                      : { scale: 1, opacity: 1, filter: "blur(0px) brightness(1)" }}
                    transition={phase === "fracturing"
                      ? { duration: reduceMotion ? 0.5 : 1.35, times: [0, 0.25, 0.42, 0.56, 1], ease: [0.7, 0, 0.84, 0] }
                      : { duration: 0.35 }}
                    style={{
                      x: reduceMotion ? 0 : portraitX,
                      y: reduceMotion ? 0 : portraitY,
                      translateZ: 32,
                    }}
                    className="neural-avatar-shell relative h-52 w-52 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black disabled:cursor-default sm:h-56 sm:w-56"
                  >
                    <div className="neural-avatar-border absolute inset-0 rounded-full" />
                    <div className="absolute inset-[4px] overflow-hidden rounded-full bg-black">
                      <div aria-hidden className="solid-gray-atom absolute inset-0 rounded-full" />
                      {phase === "revealing" && (
                        <>
                          <motion.img
                            src={profilePic}
                            alt="Raj Sri Selvan"
                            className="identity-reveal absolute inset-0 h-full w-full object-cover object-top"
                            initial={{ opacity: 0, scale: 1.08, filter: "brightness(5) blur(7px)" }}
                            animate={{
                              opacity: [0, 1, 1],
                              scale: [1.08, 1, 1.015],
                              filter: [
                                "brightness(5) blur(7px)",
                                "brightness(1.55) blur(0px)",
                                "brightness(1) blur(0px)",
                              ],
                            }}
                            transition={{
                              duration: reduceMotion ? 0.35 : 1.15,
                              times: [0, 0.38, 1],
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          />
                          <motion.span
                            aria-hidden
                            className="identity-flash pointer-events-none absolute inset-0 rounded-full"
                            initial={{ opacity: 0, scale: 0.2 }}
                            animate={{ opacity: [0, 1, 0], scale: [0.2, 1.15, 1.7] }}
                            transition={{
                              duration: reduceMotion ? 0.3 : 0.95,
                              times: [0, 0.3, 1],
                              ease: "easeOut",
                            }}
                          />
                        </>
                      )}
                      {phase === "fracturing" && (
                        <motion.svg
                          aria-hidden
                          viewBox="0 0 220 220"
                          className="crystal-fractures absolute inset-0 h-full w-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 1, 0] }}
                          transition={{ duration: 1, times: [0, 0.2, 0.7, 1] }}
                        >
                          <path d="M110 0 L104 72 L64 42 M104 72 L132 101 L191 69 M132 101 L174 150 L220 142 M132 101 L113 139 L147 220 M113 139 L69 167 L58 220 M113 139 L82 104 L0 126 M82 104 L42 71 L0 61" />
                          <path d="M104 72 L82 104 L113 139 M132 101 L113 139 M69 167 L22 183 M174 150 L188 207" />
                        </motion.svg>
                      )}
                    </div>
                  </motion.button>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {phase === "shattering" && (
                <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="crystal-burst-rays absolute h-[320px] w-[320px] rounded-full"
                    initial={{ scale: 0.12, opacity: 0, rotate: -20 }}
                    animate={{ scale: [0.12, 1.15, 1.55], opacity: [0, 1, 0], rotate: 42 }}
                    transition={{ duration: reduceMotion ? 0.5 : 1.5, delay: 0.28, times: [0, 0.34, 1], ease: "easeOut" }}
                  />
                  <motion.span
                    className="fracture-flash absolute h-28 w-28 rounded-full"
                    initial={{ scale: 0.02, opacity: 0 }}
                    animate={{ scale: [0.02, 0.15, 1.8, 0.05], opacity: [0, 0.45, 1, 0] }}
                    transition={{ duration: reduceMotion ? 0.6 : 2.25, times: [0, 0.22, 0.43, 1], ease: [0.16, 1, 0.3, 1] }}
                    onAnimationComplete={completeShatter}
                  />
                  {[0, 1].map((ring) => (
                    <motion.span
                      key={ring}
                      className="absolute rounded-full border border-white/90"
                      initial={{ width: 90, height: 90, opacity: 0 }}
                      animate={{ width: 420 + ring * 55, height: 420 + ring * 55, opacity: [0, 0.92 - ring * 0.22, 0] }}
                      transition={{
                        duration: reduceMotion ? 0.45 : 1.05 + ring * 0.18,
                        delay: 0.54 + ring * 0.1,
                        times: [0, 0.12, 1],
                        ease: "easeOut",
                      }}
                    />
                  ))}
                  {SILVER_SHARDS.map((shard, index) => (
                    <motion.span
                      key={index}
                      className="crystal-shard absolute"
                      style={{
                        width: shard.width,
                        height: shard.height,
                        background: shard.color,
                        clipPath: shard.clipPath,
                      }}
                      initial={{ x: shard.startX, y: shard.startY, scale: 1, opacity: 1, rotate: 0 }}
                      animate={{
                        x: shard.x,
                        y: shard.y,
                        scale: [1, 1.12, 0.72],
                        opacity: [1, 1, 0.82, 0],
                        rotate: shard.rotate,
                      }}
                      transition={{
                        duration: reduceMotion ? 0.5 : 1.35 + (index % 5) * 0.07,
                        delay: shard.delay * 0.35,
                        times: [0, 0.18, 0.76, 1],
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {phase === "crystal" && (
                <motion.div
                  key="crystal"
                  initial={{ scale: 0, opacity: 0, rotate: -90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 1.8, opacity: 0, filter: "brightness(4) blur(3px)" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-1/2 z-20 -ml-10 -mt-10 h-20 w-20"
                >
                  <motion.button
                    type="button"
                    aria-label="Click floating crystal to rebuild silver sphere"
                    onClick={beginReform}
                    animate={CRYSTAL_DRIFT}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    className="crystal-button flex h-20 w-20 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                  >
                    <span className="crystal-core relative block h-9 w-7">
                      <span className="crystal-glint absolute left-[48%] top-[15%] h-2 w-[2px] -rotate-[28deg] rounded-full bg-white" />
                    </span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {phase === "reforming" && (
              <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="fusion-nucleus absolute h-10 w-10 rounded-full"
                  initial={{ scale: 0.4, opacity: 0.8 }}
                  animate={{ scale: [0.4, 0.7, 1.35], opacity: [0.8, 1, 1] }}
                  transition={{ duration: reduceMotion ? 0.55 : 2.35, times: [0, 0.58, 1], ease: "easeInOut" }}
                  onAnimationComplete={() => setPhase("fusing")}
                />
                {SILVER_SHARDS.map((shard, index) => (
                  <motion.span
                    key={index}
                    className="crystal-shard absolute"
                    style={{
                      width: shard.width,
                      height: shard.height,
                      background: shard.color,
                      clipPath: shard.clipPath,
                    }}
                    initial={{ x: shard.x, y: shard.y, scale: 0.4, opacity: 0, rotate: shard.rotate }}
                    animate={{
                      x: shard.startX,
                      y: shard.startY,
                      scale: [0.4, 1.05, 0.92],
                      opacity: [0, 1, 1, 1],
                      rotate: [shard.rotate, shard.rotate * 0.35, 0],
                    }}
                    transition={{
                      duration: reduceMotion ? 0.5 : 2.2,
                      delay: 0.05 + shard.delay * 1.25,
                      times: [0, 0.12, 0.84, 1],
                      ease: [0.7, 0, 0.84, 0],
                    }}
                  />
                ))}
              </div>
            )}

            {phase === "fusing" && (
              <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="neural-avatar-shell relative h-52 w-52 overflow-hidden bg-black sm:h-56 sm:w-56"
                  initial={{ scale: 0.82, opacity: 0, borderRadius: "44%", filter: "blur(8px) brightness(4.8)" }}
                  animate={{ scale: [0.82, 1.035, 1], opacity: [0, 1, 1], borderRadius: ["44%", "50%", "50%"], filter: ["blur(8px) brightness(4.8)", "blur(0) brightness(2.2)", "blur(0) brightness(1)"] }}
                  transition={{ duration: reduceMotion ? 0.55 : 1.15, times: [0, 0.62, 1], ease: [0.16, 1, 0.3, 1] }}
                  onAnimationComplete={completeReform}
                >
                  <div className="neural-avatar-border absolute inset-0 rounded-full" />
                  <div className="absolute inset-[4px] overflow-hidden rounded-full bg-black">
                    <div className="solid-gray-atom absolute inset-0 rounded-full" />
                  </div>
                </motion.div>
                <motion.span
                  className="fusion-flash absolute h-28 w-28 rounded-full"
                  initial={{ scale: 0.08, opacity: 0 }}
                  animate={{ scale: [0.08, 1.6, 0.12], opacity: [0, 1, 0] }}
                  transition={{ duration: reduceMotion ? 0.5 : 1.05, times: [0, 0.45, 1], ease: "easeOut" }}
                />
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className="neural-status pointer-events-none absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-black/60 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 backdrop-blur-md"
            data-phase={phase}
            data-energy-level={chargeLevel}
          >
            <span className="neural-status-dot h-1.5 w-1.5 rounded-full" />
            {statusText}
            {phase === "orbiting" && (
              <span aria-hidden className="ml-1 flex gap-1">
                {[1, 2, 3, 4, 5, 6, 7].map((level) => (
                  <span
                    key={level}
                    className={`h-1 w-2 rounded-full transition-all duration-200 ${chargeLevel >= level ? "bg-cyan-300 shadow-[0_0_6px_#67e8f9]" : "bg-zinc-800"}`}
                  />
                ))}
              </span>
            )}
          </motion.div>
        </motion.div>
      </div>

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
