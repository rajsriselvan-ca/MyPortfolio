import aboutImg from "../assets/aboutMe.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

/* Splits a text node on a keyword and wraps it in an animated highlight */
const withHighlight = (text, keyword) => {
  const parts = text.split(keyword);
  if (parts.length === 1) return text;
  return (
    <>
      {parts[0]}
      <motion.span
        initial={{ backgroundPosition: "-200% 0" }}
        animate={{ backgroundPosition: "200% 0" }}
        transition={{ duration: 3.5, ease: "linear", repeat: Infinity }}
        className="inline-block cursor-default rounded-sm px-0.5 font-semibold"
        style={{
          background: "linear-gradient(90deg, #818cf8, #e879f9, #38bdf8, #818cf8)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {keyword}
      </motion.span>
      {parts[1]}
    </>
  );
};

const About = () => {
  const paragraphs = ABOUT_TEXT.split('\n\n');

  return (
    <section id="about" className="relative z-10 py-20 text-white">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-indigo-300">/ 01</p>
        <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          About <span className="text-gradient">Me</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500 opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-xl backdrop-blur">
              <img className="rounded-2xl" src={aboutImg} alt="about Raj" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="space-y-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
            {paragraphs.map((line, i) => (
              <p key={i}>{withHighlight(line, "never-give-up")}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            {[
              { label: 'Years', value: '7' },
              { label: 'Projects', value: '10+' },
              { label: 'Teams led', value: '3' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(99,102,241,0.25)]"
              >
                <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
