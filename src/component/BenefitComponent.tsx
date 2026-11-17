import {motion} from "framer-motion"
import { SelectedPage } from "../services/types"
import {Link} from "react-scroll";

type props = {
       icon:React.JSX.Element,
    title:string,
    description:string,
    setSelectedPage:(value:SelectedPage)=>void;
}
function BenefitComponent({icon,title,description,setSelectedPage}:props) {
    const childVariant = {
        hidden:{opacity:0,scalte:0.9},
        visible:{opacity:1,scalte:1}
    }
  return (
    <motion.div className="border-2 border-gray-100 rounded-lg mt-5 px-5 py-16 text-center"
    variants={childVariant}>
        <div className=" flex flex-col items-center gap-4">
       
            <div className="border-2 border-gray-100 rounded-full p-4 bg-primary-100">
                {icon}
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
            <Link
            onClick={()=>setSelectedPage(SelectedPage.CONTACTUS)}
            to={`#${SelectedPage.CONTACTUS}`}
            className="text-sm text-primary-300 underline hover:text-secondary-500"
            
            >
            <p>Learn More</p>
            </Link>

          
        </div>

    </motion.div>
  )
}

export default BenefitComponent