import { motion } from "framer-motion";
import uogLogo from "../assets/UOG_logo.png";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-indigo-500">/ 05</p>
        <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          <span className="text-gradient">Education</span>
        </h2>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl"
      >
        <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 opacity-25 blur-2xl" />
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-white/60 bg-white/90 px-6 py-8 shadow-xl backdrop-blur-sm lg:flex-row lg:items-center lg:px-10 lg:py-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400 opacity-20 blur-3xl" />

          {/* Logo */}
          <div className="flex w-full items-center justify-center lg:w-1/3">
            <a
              href="https://www.universityofgalway.ie/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-2xl bg-white p-4 shadow-sm transition-transform hover:scale-105"
            >
              <img
                src={uogLogo}
                alt="University of Galway"
                className="max-h-28 w-auto object-contain"
              />
            </a>
          </div>

          {/* Details */}
          <div className="w-full space-y-4 lg:w-2/3">
            <div className="space-y-1">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                Master&apos;s Degree
              </p>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Master of Science
              </h3>
              <p className="text-base font-medium text-slate-700">
                Information Systems Management
              </p>
            </div>

            <div className="space-y-1 pt-2 text-sm text-neutral-700">
              <p>
                <span className="font-semibold text-slate-900">University:</span>{" "}
                University of Galway
              </p>
              <p>
                <span className="font-semibold text-slate-900">Location:</span>{" "}
                Galway, Ireland
              </p>
            </div>

            <div className="pt-4">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Core Modules
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Advance Programming",
                  "Web Design & Development",
                  "Cloud Computing",
                  "Database Systems",
                  "Enterprise Systems",
                ].map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-gradient-to-r from-slate-900 to-slate-700 px-3 py-1 text-xs font-medium text-white shadow-sm"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Result: 2:1
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
