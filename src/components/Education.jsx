import { motion } from "framer-motion";
import uogLogo from "../assets/UOG_logo.png";

const Education = () => {
  return (
    <div id="education" className="border-b border-neutral-200 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-3xl bg-white/90 border border-neutral-200 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.18)] lg:flex-row lg:items-center lg:px-10 lg:py-10"
      >
        {/* Logo and university identity */}
        <div className="flex w-full items-center justify-center lg:w-1/3">
          <a
            href="https://www.universityofgalway.ie/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
          >
            <img
              src={uogLogo}
              alt="University of Galway"
              className="max-h-32 w-auto object-contain drop-shadow-sm"
            />
          </a>
        </div>

        {/* Degree details */}
        <div className="w-full lg:w-2/3 space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Master&apos;s Degree
            </p>
            <h3 className="text-2xl font-semibold text-slate-900">
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

          <div className="pt-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Core Modules
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Advance Programming",
                "Web Design & Development",
                "Cloud Computing",
                "Database Systems",
                "Enterprise Systems",
              ].map((module) => (
                <span
                  key={module}
                  className="rounded-full bg-slate-800 text-xs font-medium text-white px-3 py-1 shadow-sm shadow-slate-400/40"
                >
                  {module}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 border border-emerald-100">
              Result: 2:1
            </span>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
};

export default Education;

