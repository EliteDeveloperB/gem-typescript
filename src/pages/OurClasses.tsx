import { motion } from "framer-motion";
import { SelectedPage, type ClassType } from "../services/types";
import HText from "../component/HText";
import imge1 from "../assets/images/sport.jpg";
import imge2 from "../assets/images/sport2.jpg";
import imge3 from "../assets/images/sport3.jpg";
import imge4 from "../assets/images/sport4.jpg";
import imge5 from "../assets/images/sport5.jpg";
import imge6 from "../assets/images/sport6.jpg";
import Class from "../component/Class";

type props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const classes:Array<ClassType> = [
    {
        title: "Weight TRaining Class",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum ex adipisci at eligendi odit ducimus ut nobis, ipsam recusandae vel, dolorem ea, dolorum consequuntur ullam dicta ipsa. Provident, hic?",
        image:imge1,
    },
     {
        title: "Body Pump Class",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum ex adipisci at eligendi odit ducimus ut nobis, ipsam recusandae vel, dolorem ea, dolorum consequuntur ullam dicta ipsa. Provident, hic?",
        image:imge2,
    },
     {
        title: "TRX Class",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum ex adipisci at eligendi odit ducimus ut nobis, ipsam recusandae vel, dolorem ea, dolorum consequuntur ullam dicta ipsa. Provident, hic?",
        image:imge3,
    },
     {
        title:"Crosee Fit Class",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum ex adipisci at eligendi odit ducimus ut nobis, ipsam recusandae vel, dolorem ea, dolorum consequuntur ullam dicta ipsa. Provident, hic?",
        image:imge4,
    },
     {
        title:"Cardio Class",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum ex adipisci at eligendi odit ducimus ut nobis, ipsam recusandae vel, dolorem ea, dolorum consequuntur ullam dicta ipsa. Provident, hic?",
        image:imge5,
    },
     {
        title:"Spinning Class",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum ex adipisci at eligendi odit ducimus ut nobis, ipsam recusandae vel, dolorem ea, dolorum consequuntur ullam dicta ipsa. Provident, hic?",
        image:imge6,
    },
   

]

function OurClasses({setSelectedPage}:props) {
  return (
   <section id="ourclasses"
   className="w-full min-h-full py-16 bg-primary-100">
       <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OURCLASSES)}>
      
      <motion.div className="w-5/6 mx-auto" 
        initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },}}>
                <HText>OUR CLASSES</HText>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, magni similique provident incidunt consequuntur fuga nemo totam ab dolore omnis minus, adipisci tempora a, facere quas aspernatur quia iste assumenda.</p>

      </motion.div>
      <div className="mt-10 h-[380px] w-full overflow-x-auto overflow-y-hidden ">
        <ul className="w-[2800px] whitespace-nowrap">

        {classes.map((item,index) => (
                <Class 
                key={`${item.title}-${index}`}
                title={item.title}
                description={item.description}
                image={item.image}/>
            ))
        }
        </ul>

      </div>
   
    </motion.div>
   </section>
  )
}

export default OurClasses