import { motion } from "framer-motion";
const Content = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="mt-2 border rounded-3xl shadow-lg lg:my-5 lg:ml-5 w-full font-quicksand"
    >
      <div className="flex flex-col h-full">
        <p className="text-center my-auto">{title}</p>
      </div>
    </motion.div>
  );
};

export default Content;
