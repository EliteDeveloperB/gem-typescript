import { useEffect, useState } from "react"


const useMediaQuery =(query:string):boolean =>{
    const [matchs,setMatches]=useState<boolean>(false)
    useEffect(()=>{
        const media = window.matchMedia(query);
        if(media.matches !== matchs){
                setMatches(media.matches)
            };
            const listener =()=> setMatches(media.matches)
            media.addEventListener("change",listener)
            return ()=>media.removeEventListener("change",listener)
            },[matchs,query]);

    return matchs;
}

export default useMediaQuery