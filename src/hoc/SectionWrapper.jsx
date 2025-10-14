// Import Framer Motion for animations
import { motion } from "framer-motion";

// Import shared styling variables
import { styles } from "../styles";

// Import an animation variant function for staggered child animations
import { staggerContainer } from "../utils/motion";

// Higher-Order Component (HOC) factory
// Takes in a React component (Component) and a string ID (idName) for anchor navigation
const StarWrapper = (Component, idName) =>
  // Returns a new component (HOC) that wraps the original one
  function HOC() {
    return (
      // Animated <section> element
      <motion.section
        // Apply the staggered animation to children
        variants={staggerContainer()}
        // Start hidden
        initial="hidden"
        // Animate to "show" when scrolled into view
        whileInView="show"
        // Trigger only once, when 25% of the section is visible
        viewport={{ once: true, amount: 0.25 }}
        // Apply padding, max width, centering, and z-index styling
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Invisible anchor target for smooth scrolling (e.g. href="#about") */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Render the original wrapped component */}
        <Component />
      </motion.section>
    );
  };

// Export the HOC factory so it can be used elsewhere
export default StarWrapper;
