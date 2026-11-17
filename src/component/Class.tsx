
import type { ClassType } from "../services/types"


function Class({title,image,description}:ClassType) {
    const overlayStyle = `p-5 absolute z-30 flex h-[380px] w-[450px]
  flex-col items-center justify-center whitespace-normal
   bg-primary-500 text-center text-white 
  opacity-0 transition-500 duration-500 hover:opacity-90`
  return (
    <li className="relative mx-3 inline-block h-[380px] w-[450px]">
        <div className={overlayStyle}>
            <p className="text-xl py-2">{title}</p>
            <p className="text-xs">{description}</p>
        </div>
        <img className="w-full h-full object-cover bg-center" 
        src={image} alt="" />
    </li>
  )
}

export default Class