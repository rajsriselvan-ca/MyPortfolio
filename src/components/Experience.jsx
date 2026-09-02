import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-indigo-500">/ 03</p>
        <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          <span className="text-gradient">Experience</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Roles that shaped how I build, lead and ship.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {EXPERIENCES.map((exp, i) => (
          <motion.article
            key={exp.company}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Decorative gradient bg */}
            <div
              className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${exp.accent} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
            />
            <div className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:24px_24px] opacity-[0.25]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${exp.accent} px-3 py-1 text-xs font-semibold text-white shadow-sm`}
                >
                  <FaBriefcase className="text-[10px]" />
                  {exp.year}
                </span>
                <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold leading-snug text-slate-900">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm font-semibold text-indigo-600">{exp.company}</p>
              {exp.location && (
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <FaMapMarkerAlt className="text-[10px]" />
                  {exp.location}
                </p>
              )}

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {exp.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 transition-colors group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
