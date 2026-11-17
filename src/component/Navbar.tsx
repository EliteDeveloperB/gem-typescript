import type { SelectedPage } from "../services/types";
import logo from "../assets/images/logo.png"
import { useState } from "react";
import useMediaQuery from "../hook/useMediaQuery";
import  Link  from "./Link";
import ActionButton from "./ActionButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


type NavProps ={
    isTopOfPage:boolean;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void;
}


function Navbar({selectedPage,setSelectedPage,isTopOfPage}:NavProps) {
    const [isMenuToggled,setIsMenuToggled]=useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const flexBetween = "flex justify-between items-center"
    const navBackground = isTopOfPage ? "" :"bg-primary-100 drop-shadow-xl"
  return (
  <nav>
    <div className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 `}>
        <div className={`${flexBetween} mx-auto w-5/6 gap-16`}>
    <div className="bg-gray-500 w-24 h-16"
    style={{mask:`url(${logo}) no-repeat center /contain`,
    WebkitMask:`url(${logo}) no-repeat center/contain`}}>

    </div>
        {
        isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link page="HOME" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="BENEFITS" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="OUR CLASSES" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="CONTACT US" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flexBetween} gap-8`}>
                    <button>sign in</button>
                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>

            </div>
        ) : (
            <button
            className="bg-secondary-500 p-2 rounded-full"
            onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="w-6 h-6 text-white"/>
            </button>
        )
        }

        </div>
    </div>
    {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-50 h-full w-[250px] bg-primary-100 drop-shadow-xl">
           <div className="flex justify-end p-12 ">
            <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="w-6 h-6 text-gray-500 font-bold"/>
            </button>
            </div> 
            <div className="ml-[25%] flex flex-col gap-10 text-xl">
                    <Link page="HOME" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="BENEFITS" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="OUR CLASSES" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="CONTACT US" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
        </div>

    )}
      </nav>
        )
    }


export default Navbar