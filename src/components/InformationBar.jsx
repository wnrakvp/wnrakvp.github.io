import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import viteLogo from "../assets/vite.svg";
import { motion } from "framer-motion";
const InformationBar = () => {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}>
        <div className="relative p-5 my-2 border rounded-3xl bg-white shadow-lg font-quicksand">
        <p className="my-2 absolute -top-5 left-2 border rounded-lg bg-white px-2">Supported By</p>
        <div className="flex gap-7 justify-center">
            <img className="object-contain h-16 w-16" src={reactLogo} alt="Logo React" />
            <img className="object-scale-down h-16 w-16" src={tailwindLogo} alt="Logo React" />
            <img className="object-contain h-16 w-16" src={viteLogo} alt="Logo React" />
        </div>
            {/* <p className="text-center">Using This..</p> */}
        </div>
        </motion.div>
     );
}
 
export default InformationBar;