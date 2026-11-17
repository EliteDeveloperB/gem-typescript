import type { SelectedPage } from "../services/types";
import {Link as ScrollLink} from "react-scroll";

type linkProps = {
    page:string;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void;
}

function Link({page,selectedPage,setSelectedPage}:linkProps) {
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "")as SelectedPage;
      return (
   <ScrollLink
   to={lowerCasePage}
   smooth={true}
   duration={500}
   onClick={()=>setSelectedPage(lowerCasePage)}
   className={`${selectedPage === lowerCasePage ? "text-shadow-primary-500":""}
   transtion duration-500 hover:text-primary-300 `}>
    {page}
   </ScrollLink>
  )
}

export default Link