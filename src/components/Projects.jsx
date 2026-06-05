import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-indigo-500">/ 04</p>
        <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Personal <span className="text-gradient">Projects</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          A few side builds where I get to play with ideas end-to-end.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => {
          const isGithub = project.url?.includes('github.com');
          return (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image header with gradient overlay */}
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 bg-grid-light bg-[size:18px_18px] opacity-30" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 mix-blend-luminosity transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3 className="font-display text-2xl font-bold text-white drop-shadow">
                    {project.title}
                  </h3>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-transform duration-300 group-hover:rotate-45">
                    {isGithub ? <FaGithub /> : <FaExternalLinkAlt className="text-sm" />}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {isGithub ? 'View on GitHub' : 'Open live project'}
                  <FaExternalLinkAlt className="text-xs" />
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
