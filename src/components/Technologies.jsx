import { RiReactjsLine } from 'react-icons/ri';
import {
  SiJavascript, SiTypescript, SiMysql, SiSelenium, SiGraphql,
  SiJenkins, SiMongodb, SiCypress, SiCircleci, SiDocker,
  SiPytorch, SiOpenai, SiApachekafka,
} from "react-icons/si";
import { FaNodeJs, FaAws } from 'react-icons/fa';
import { motion } from "framer-motion";

const TECHS = [
  { Icon: RiReactjsLine,   label: 'React',       color: '#06b6d4',  duration: 2.5 },
  { Icon: SiJavascript,    label: 'JavaScript',  color: '#F0DB4F',  duration: 3   },
  { Icon: SiTypescript,    label: 'TypeScript',  color: '#3178c6',  duration: 4   },
  { Img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
                           label: 'Python',                         duration: 4.5 },
  { Icon: FaNodeJs,        label: 'Node.js',     color: '#22c55e',  duration: 6   },
  { Icon: SiGraphql,       label: 'GraphQL',     color: '#E10098',  duration: 4   },
  { Icon: SiMongodb,       label: 'MongoDB',     color: '#4DB33D',  duration: 5   },
  { Icon: SiMysql,         label: 'MySQL',       color: '#60a5fa',  duration: 5   },
  { Icon: FaAws,           label: 'AWS',         color: '#FF9900',  duration: 3   },
  { Icon: SiDocker,        label: 'Docker',      color: '#2496ED',  duration: 4   },
  { Icon: SiApachekafka,   label: 'Kafka',       color: '#e5e7eb',  duration: 3.5 },
  { Img: 'https://cdn.simpleicons.org/langchain/22C55E',
                           label: 'LangChain',                      duration: 5   },
  { Img: 'https://cdn.simpleicons.org/anthropic/D97757',
                           label: 'Claude AI',                      duration: 4   },
  { Img: 'https://cdn.simpleicons.org/n8n/EA4B71',
                           label: 'n8n',                            duration: 3   },
  { Icon: SiPytorch,       label: 'PyTorch',     color: '#EE4C2C',  duration: 3.5 },
  { Icon: SiOpenai,        label: 'OpenAI',      color: '#e5e7eb',  duration: 4   },
  { Icon: SiSelenium,      label: 'Selenium',    color: '#43B02A',  duration: 2   },
  { Icon: SiJenkins,       label: 'Jenkins',     color: '#D33833',  duration: 5   },
  { Icon: SiCypress,       label: 'Cypress',     color: '#10b981',  duration: 3.5 },
  { Icon: SiCircleci,      label: 'CircleCI',    color: '#cbd5e1',  duration: 4.5 },
  { Img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
                           label: 'Figma',                          duration: 4.5 },
];

const iconVariants = (duration) => ({
  initial: { y: -8 },
  animate: {
    y: [8, -8],
    transition: { duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
  },
});

const Technologies = () => {
  return (
    <section id="tech" className="relative z-10 py-20 text-white">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-indigo-300">/ 02</p>
        <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          My <span className="text-gradient">Tech Stack</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-zinc-400">
          Tools I reach for daily, frontend, backend, infrastructure and AI.
        </p>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {TECHS.map((t) => (
          <motion.div
            key={t.label}
            variants={iconVariants(t.duration)}
            initial="initial"
            animate="animate"
            title={t.label}
            className="group relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(99,102,241,0.25)]"
          >
            {t.Icon ? (
              <t.Icon className="text-5xl" style={{ color: t.color }} />
            ) : (
              <img src={t.Img} alt={t.label} className="h-12 w-12 object-contain" />
            )}
            <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">
              {t.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
