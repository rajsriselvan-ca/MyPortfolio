import { RiReactjsLine } from 'react-icons/ri'
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from 'react-icons/si'
import { SiSelenium } from 'react-icons/si'
import { FaNodeJs, FaAws } from 'react-icons/fa'
import { SiGraphql } from "react-icons/si";
import { SiJenkins } from 'react-icons/si'
import { motion } from "framer-motion";
import { SiMongodb } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiCircleci } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiFigma } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-200 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <SiJavascript className='text-7xl' style={{ color: '#F0DB4F' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <SiTypescript className='text-7xl' style={{ color: '#007acc' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4 flex items-center justify-center'>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
            alt="Python" 
            className='w-16 h-16 object-contain'
          />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4 flex items-center justify-center'>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" 
            alt="Figma" 
            className='w-16 h-16 object-contain'
          />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-200 p-4"
        >
          <SiGraphql className="text-7xl text-[#E10098]" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <SiSelenium className='text-7xl' style={{ color: '#43B02A' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'
        >
          <SiJenkins className='text-7xl text-[#D33833]' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'
        >
          <SiMongodb className='text-7xl text-[#4DB33D]' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <SiMysql className='text-7xl text-blue-300' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <SiCypress className='text-7xl text-emerald-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <SiCircleci className='text-7xl' style={{ color: '#343434' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <FaAws className='text-7xl' style={{ color: '#FF9900' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <SiDocker className='text-7xl' style={{ color: '#2496ED' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <SiPytorch className='text-7xl' style={{ color: '#EE4C2C' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-200 p-4'>
          <SiOpenai className='text-7xl' style={{ color: '#000000' }} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies