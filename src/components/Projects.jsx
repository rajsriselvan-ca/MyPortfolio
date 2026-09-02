import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBrain,
  FaCheck,
  FaDesktop,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaLayerGroup,
  FaMobileAlt,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { PROJECTS } from "../constants";

const AUTO_SLIDE_MS = 7000;

const CATEGORY_OPTIONS = [
  { id: "all", label: "View all", icon: FaLayerGroup },
  { id: "ai", label: "AI / LLM", icon: FaBrain },
  { id: "mobile", label: "Mobile", icon: FaMobileAlt },
  { id: "web", label: "Web", icon: FaGlobe },
  { id: "desktop", label: "Desktop", icon: FaDesktop },
];

const ProjectMedia = ({ project, activeImageIndex, onSelectImage, reducedMotion }) => {
  const activeImage = project.images[activeImageIndex] ?? project.images[0];
  const isPhone = project.imageMode === "phone";

  return (
    <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden border-b border-white/10 bg-[#080d1a] p-5 sm:min-h-[500px] sm:p-8 lg:min-h-[610px] lg:border-b-0 lg:border-r">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`} />
      <div className="project-stage-grid absolute inset-0 opacity-50" />
      <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/65 backdrop-blur-md sm:left-7 sm:top-7">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
        Live product view
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${project.title}-${activeImageIndex}`}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02, y: -10 }}
          transition={{ duration: reducedMotion ? 0.15 : 0.42, ease: [0.16, 1, 0.3, 1] }}
          className={`relative z-10 flex items-center justify-center ${
            isPhone ? "h-[340px] sm:h-[420px] lg:h-[500px]" : "h-[290px] w-full sm:h-[370px] lg:h-[440px]"
          }`}
        >
          <div
            className={
              isPhone
                ? "relative h-full overflow-hidden rounded-[2rem] border-[5px] border-slate-800 bg-white shadow-[0_28px_70px_rgba(0,0,0,0.55)] ring-1 ring-white/20"
                : "relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_28px_70px_rgba(0,0,0,0.45)] sm:rounded-3xl"
            }
          >
            {isPhone && <div className="absolute left-1/2 top-2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-950/90" />}
            <img
              src={activeImage}
              alt={`${project.title} interface preview ${activeImageIndex + 1}`}
              className={isPhone ? "h-full w-auto object-contain" : "h-full w-full object-contain"}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {project.images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-20 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-2xl border border-white/15 bg-slate-950/75 p-2 shadow-2xl backdrop-blur-xl sm:bottom-6">
          {project.images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => onSelectImage(index)}
              aria-label={`Show ${project.title} screenshot ${index + 1}`}
              aria-pressed={activeImageIndex === index}
              className={`relative overflow-hidden rounded-lg border transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                isPhone ? "h-12 w-8 sm:h-14 sm:w-10" : "h-10 w-16 sm:h-12 sm:w-20"
              } ${
                activeImageIndex === index
                  ? "scale-105 border-white shadow-[0_0_18px_rgba(255,255,255,0.25)]"
                  : "border-white/15 opacity-55 hover:border-white/50 hover:opacity-100"
              }`}
            >
              <img src={image} alt="" className="h-full w-full object-cover" />
              {activeImageIndex === index && (
                <span className="absolute right-1 top-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[7px] text-slate-950">
                  <FaCheck />
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectOverview = ({ projects, categoryLabel, onSelectProject, reducedMotion }) => (
  <motion.div
    key={`overview-${categoryLabel}`}
    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
    transition={{ duration: reducedMotion ? 0.15 : 0.4, ease: [0.16, 1, 0.3, 1] }}
    className="relative min-h-[610px] bg-[#080d18] p-5 sm:p-7 lg:p-8"
  >
    <div className="project-stage-grid pointer-events-none absolute inset-0 opacity-35" />
    <div className="relative mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">{categoryLabel} collection</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">Choose a project to explore</h3>
      </div>
      <p className="text-xs text-slate-500">{projects.length} project{projects.length === 1 ? "" : "s"} available</p>
    </div>

    <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.button
          key={project.title}
          type="button"
          onClick={() => onSelectProject(index)}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.15 : 0.4, delay: reducedMotion ? 0 : index * 0.045 }}
          aria-label={`Open ${project.title} project details`}
          className="group relative aspect-[1.18/1] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 text-left shadow-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:aspect-[1.3/1]"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-35`} />
          {project.imageMode === "phone" && (
            <img
              src={project.images[0]}
              alt=""
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-xl"
            />
          )}
          <img
            src={project.images[0]}
            alt={`${project.title} project preview`}
            className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-[1.04] ${
              project.imageMode === "phone" ? "object-contain p-4" : "object-cover"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
            <div className="min-w-0">
              <p className="truncate font-mono text-[8px] uppercase tracking-[0.17em] text-cyan-200/80">
                {project.eyebrow}
              </p>
              <h4 className="mt-1 truncate font-display text-xl font-bold text-white sm:text-2xl">{project.title}</h4>
            </div>
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:rotate-[-8deg] group-hover:bg-white group-hover:text-slate-950">
              <FaArrowRight className="text-xs" />
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  </motion.div>
);

const Projects = () => {
  const reducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isOverview, setIsOverview] = useState(true);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? PROJECTS
        : PROJECTS.filter((project) => project.categories.includes(activeCategory)),
    [activeCategory],
  );

  const safeIndex = activeIndex % filteredProjects.length;
  const activeProject = filteredProjects[safeIndex];
  const autoplayPaused = manualPaused || isInteracting || reducedMotion || isOverview;
  const activeCategoryLabel = CATEGORY_OPTIONS.find((category) => category.id === activeCategory)?.label ?? "Projects";

  useEffect(() => {
    setActiveIndex(0);
    setActiveImageIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeProject.title]);

  useEffect(() => {
    if (autoplayPaused || filteredProjects.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % filteredProjects.length);
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [autoplayPaused, filteredProjects.length]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % filteredProjects.length);
  };

  const selectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setIsOverview(true);
    setManualPaused(false);
  };

  const selectProject = (index) => {
    setActiveIndex(index);
    setActiveImageIndex(0);
    setManualPaused(false);
    setIsOverview(false);
  };

  useEffect(() => {
    if (isOverview || filteredProjects.length < 2) return undefined;

    const handleArrowNavigation = (event) => {
      const target = event.target;
      const isTypingTarget =
        target instanceof HTMLElement &&
        (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

      if (isTypingTarget || event.altKey || event.ctrlKey || event.metaKey) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((current) => (current - 1 + filteredProjects.length) % filteredProjects.length);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % filteredProjects.length);
      }
    };

    window.addEventListener("keydown", handleArrowNavigation);
    return () => window.removeEventListener("keydown", handleArrowNavigation);
  }, [isOverview, filteredProjects.length]);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10 text-center sm:mb-12"
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-indigo-500">/ 04</p>
        <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Personal <span className="text-gradient">Projects</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Side projects, built like products. Choose a collection, then open any project for the full story.
        </p>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.15 }}
        className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-[0_35px_90px_-35px_rgba(15,23,42,0.75)] sm:rounded-[2.5rem]"
      >
        <div className="border-b border-white/10 bg-[#0a1020] px-4 py-4 sm:px-6 sm:py-5">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="project-switch flex w-full flex-wrap gap-2 rounded-2xl border border-white/10 bg-black/35 p-1.5 shadow-inner"
          >
              {CATEGORY_OPTIONS.map((category) => {
                const Icon = category.icon;
                const count =
                  category.id === "all"
                    ? PROJECTS.length
                    : PROJECTS.filter((project) => project.categories.includes(category.id)).length;
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="project-showcase"
                    data-active={isActive}
                    onClick={() => selectCategory(category.id)}
                    className={`project-switch-key relative flex min-w-[8.5rem] flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:px-4 ${
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`project-switch-led relative z-10 h-1.5 w-1.5 rounded-full ${isActive ? "is-on" : ""}`}
                    />
                    <Icon className="relative z-10 text-[11px]" />
                    <span className="relative z-10">{category.label}</span>
                    <span
                      className={`relative z-10 rounded-md px-1.5 py-0.5 font-mono text-[9px] ${
                        isActive ? "bg-white/15 text-white" : "bg-white/5 text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
          </div>
        </div>

        <div
          id="project-showcase"
          role="tabpanel"
          aria-live="polite"
          aria-label={isOverview ? `${activeCategoryLabel} project selection` : `${activeProject.title} project carousel`}
          className="relative"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onFocusCapture={() => setIsInteracting(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
          }}
        >
          <AnimatePresence mode="wait">
            {isOverview ? (
              <ProjectOverview
                projects={filteredProjects}
                categoryLabel={activeCategoryLabel}
                onSelectProject={selectProject}
                reducedMotion={reducedMotion}
              />
            ) : (
              <motion.article
                key={`${activeCategory}-${activeProject.title}`}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
                transition={{ duration: reducedMotion ? 0.15 : 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-[1.12fr_0.88fr]"
              >
                <ProjectMedia
                  project={activeProject}
                  activeImageIndex={activeImageIndex}
                  onSelectImage={setActiveImageIndex}
                  reducedMotion={reducedMotion}
                />

                <div className="relative flex min-h-[520px] flex-col p-6 sm:p-9 lg:min-h-[610px] lg:p-10">
                  <div className={`pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-gradient-to-br ${activeProject.accent} opacity-15 blur-3xl`} />

                  <div className="relative flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {activeProject.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setIsOverview(true)}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      >
                        <FaLayerGroup />
                        Project faces
                      </button>
                      <span className="font-mono text-xs text-slate-600">
                        {String(safeIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="relative mt-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">
                      {activeProject.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      {activeProject.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-[15px]">
                      {activeProject.description}
                    </p>
                  </div>

                  <ul className="relative mt-7 space-y-3">
                    {activeProject.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${activeProject.accent} text-[8px] text-white shadow-lg`}>
                          <FaCheck />
                        </span>
                        <span className="leading-5">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-7 flex flex-wrap gap-1.5">
                    {activeProject.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-white/[0.045] px-2.5 py-1.5 text-[10px] font-medium text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-auto flex flex-wrap gap-3 pt-8">
                    {activeProject.links.map((link, index) => {
                      const isExternal = link.type !== "internal";
                      return (
                        <a
                          key={`${link.label}-${link.url}`}
                          href={link.url}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                            index === 0
                              ? `bg-gradient-to-r ${activeProject.accent} text-white shadow-[0_12px_30px_rgba(59,130,246,0.24)] hover:-translate-y-0.5 hover:brightness-110`
                              : "border border-white/15 bg-white/[0.04] text-slate-200 hover:border-white/30 hover:bg-white/[0.08]"
                          }`}
                        >
                          {link.type === "github" ? <FaGithub className="text-sm" /> : <FaExternalLinkAlt className="text-[10px]" />}
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>

          {!isOverview && (
            <>
              <p className="sr-only">Use the left and right arrow keys to navigate between projects.</p>
              <button
                type="button"
                onClick={showPrevious}
                disabled={filteredProjects.length < 2}
                aria-label="Show previous project"
                className="absolute left-2 top-1/2 z-40 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-lg text-white shadow-[0_14px_35px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-white/50 hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:scale-100 sm:left-4 sm:h-14 sm:w-14"
              >
                <FaArrowLeft />
              </button>
              <button
                type="button"
                onClick={showNext}
                disabled={filteredProjects.length < 2}
                aria-label="Show next project"
                className="absolute right-2 top-1/2 z-40 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-lg text-white shadow-[0_14px_35px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-white/50 hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:scale-100 sm:right-4 sm:h-14 sm:w-14"
              >
                <FaArrowRight />
              </button>
            </>
          )}
        </div>

        <div className="border-t border-white/10 bg-[#080d18] px-4 py-4 sm:px-6">
          {isOverview ? (
            <div className="flex items-center justify-between gap-4 py-1">
              <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-slate-500">
                Select a project face to open its full showcase
              </p>
              <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold text-slate-300">
                {filteredProjects.length} in {activeCategoryLabel}
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setManualPaused((current) => !current)}
                  disabled={filteredProjects.length < 2 || reducedMotion}
                  aria-label={manualPaused ? "Resume automatic project slideshow" : "Pause automatic project slideshow"}
                  className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  {manualPaused ? <FaPlay className="text-[9px]" /> : <FaPause className="text-[9px]" />}
                  {manualPaused ? "Resume" : "Autoplay"}
                </button>
                {filteredProjects.length > 1 && (
                  <span className="hidden items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-500 lg:flex">
                    <kbd className="rounded border border-white/15 bg-white/[0.06] px-1.5 py-1 text-[10px] text-slate-300">←</kbd>
                    <kbd className="rounded border border-white/15 bg-white/[0.06] px-1.5 py-1 text-[10px] text-slate-300">→</kbd>
                    Navigate
                  </span>
                )}
              </div>

              <div className="flex min-w-0 flex-1 items-center gap-2 sm:max-w-md">
                {filteredProjects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => selectProject(index)}
                    aria-label={`Show ${project.title}`}
                    aria-current={safeIndex === index ? "true" : undefined}
                    className={`group h-7 flex-1 rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                      safeIndex === index ? "min-w-10" : "min-w-5"
                    }`}
                  >
                    <span className="block h-1 overflow-hidden rounded-full bg-white/10">
                      {safeIndex === index && (
                        <span
                          key={`${activeCategory}-${activeProject.title}`}
                          data-paused={autoplayPaused}
                          className="project-autoplay-progress block h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400"
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>

              <p className="hidden shrink-0 items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500 md:flex">
                <span className={`h-1.5 w-1.5 rounded-full ${autoplayPaused ? "bg-amber-400" : "bg-emerald-400"}`} />
                {autoplayPaused ? "Paused while exploring" : "Advancing automatically"}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
