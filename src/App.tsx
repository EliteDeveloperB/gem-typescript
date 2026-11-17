import { useEffect, useState } from "react"
import Navbar from "./component/Navbar"
import { SelectedPage } from "./services/types"
import Home from "./pages/Home"
import Benefits from "./pages/Benefits"
import OurClasses from "./pages/OurClasses"
import Contact from "./pages/Contact"
import Footer from "./component/Footer"



function App() {
  const [selectedPage,setSelectedPage]= useState<SelectedPage>(SelectedPage.HOME)
  const [isTopOfPage,setIsTopOfPage]=useState<boolean>(true)
  useEffect(()=>{
    const handleScrollY =()=>{
      if(window.scrollY === 0){
        setSelectedPage(SelectedPage.HOME)
        setIsTopOfPage(true)
      }else{
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll",handleScrollY);
    return ()=> window.removeEventListener("scroll",handleScrollY)
  },[])
  return (
    <>
    <div className="app bg-gray-20 text-gray-500">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
        <Home  setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/>
        <Contact setSelectedPage={setSelectedPage}/>
        <Footer />
    </div>
    </>

  )
}

export default App
