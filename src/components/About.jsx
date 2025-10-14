// React + Framer Motion imports
import React from "react";
import Tilt from "react-tilt"; // Imported but not used here
import { motion } from "framer-motion";

// Shared styles + HOC wrapper
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// Animation variants
import { fadeIn, textVariant } from "../utils/motion";

// Functional component for the "About" section
const About = () => {
  return (
    <>
      {/* Title area with animation */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Body text with fade-in animation */}
      <motion.p
        // Fade in after 0.1s, lasting 1 second
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  );
};

// Export the About component wrapped with SectionWrapper
// This adds animations, layout styling, and an "about" anchor
export default SectionWrapper(About, "about");
