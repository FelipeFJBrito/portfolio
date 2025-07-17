import React from "react";
import Tilt from "react-tilt";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 font-poppins">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Text content with animation */}
        <motion.div
          className="flex flex-col justify-center md:w-1/2 text-center md:text-left space-y-6"
          variants={fadeIn("left", "spring", 0.2, 1)}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={textVariant()} className={`${styles.sectionSubText} text-white`}>
            Hello, I am <span className="text-[#8d92fd] font-bold">Felipe</span>
          </motion.p>

          <motion.h1
            variants={textVariant()}
            className="text-white text-5xl md:text-6xl font-bold"
          >
            Software Developer & Computer Engineer
          </motion.h1>

          <motion.p
            variants={fadeIn("", "", 0.3, 1)}
            className="text-secondary text-lg max-w-xl mx-auto md:mx-0"
          >
            Developing applications with front and backend operations.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-4"
            variants={fadeIn("", "", 0.4, 1)}
          >
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full shadow-md"
            >
              Let's Talk
            </button>
            <a
              href="https://drive.google.com/file/d/1ZWIZVcckTNHf0usRQKR_p4IhV0ycXpC8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-full shadow-md"
            >
              Get Resume
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start gap-4 mt-6"
            variants={fadeIn("", "", 0.5, 1)}
          >
            <a
              href="https://www.linkedin.com/in/felipefjbrito"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-500 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/FelipeFJBrito"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-500 transition-transform duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile picture with Tilt animation */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={fadeIn("right", "spring", 0.5, 1)}
          initial="hidden"
          animate="show"
        >
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="rounded-full shadow-[4px_4px_30px_rgb(12,89,255)] overflow-hidden w-80 h-80 md:w-96 md:h-96 cursor-pointer transition-transform duration-500 hover:scale-105"
          >
            <div
              style={{
                backgroundImage: "url('src/assets/profile.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center 20%",
                width: "100%",
                height: "100%",
              }}
              aria-label="Profile picture"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
