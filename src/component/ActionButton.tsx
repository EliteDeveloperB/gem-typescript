import { SelectedPage } from "../services/types";
import { Link} from "react-scroll"

type props = {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage)=>void;
}

function ActionButton({children,setSelectedPage}:props) {
  return (
   <Link
   className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
   onClick={()=>setSelectedPage(SelectedPage.CONTACTUS)}
   to={SelectedPage.CONTACTUS}
   smooth={true}
   duration={500}
   >
   {children}
   </Link>
  )
}

export default ActionButton