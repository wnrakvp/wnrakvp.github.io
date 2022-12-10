import { motion } from "framer-motion";
import About from "./About";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
const Content = ({ title, component }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="mt-2 border rounded-3xl shadow-lg lg:my-5 lg:ml-5 w-full font-quicksand"
    >
      { component === 'about' && <About/>}
      { component === 'resume' && <Resume/>}
      { component === 'project' && <Project/>}
      { component === 'contact' && <Contact/>}
    </motion.div>
  );
};

export default Content;
