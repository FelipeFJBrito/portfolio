import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants"; // assumes you created this

const EducationCard = ({ index, institution, duration, degree, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <p className="text-white font-bold text-[20px]">{institution}</p>
      <p className="text-secondary text-[14px]">{duration}</p>
      <p className="mt-3 text-white tracking-wider text-[16px] italic">{degree}</p>

      <div className="mt-5 flex justify-end">
        <img
          src={image}
          alt={`school-${institution}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Where I studied</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {education.map((school, index) => (
          <EducationCard key={school.institution} index={index} {...school} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
