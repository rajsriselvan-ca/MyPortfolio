
import aboutImg from "../assets/aboutMe.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  const paragraphs = ABOUT_TEXT.split('\n\n');
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">About
        <span className="text-neutral-500"> Me</span></h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 max-w-xl py-6">
              {paragraphs.flatMap((line, index) => [
                <p key={index}>{line}</p>,
                index < paragraphs.length - 1 ? <div key={`extra-${index}`}>&nbsp;</div> : null
              ])}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About