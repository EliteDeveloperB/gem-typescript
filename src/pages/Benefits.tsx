import {
  HomeModernIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import BenefitComponent from "../component/BenefitComponent";
import HText from "../component/HText";
import { SelectedPage, type BenefitType } from "../services/types";
import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import benefitImg from "../assets/images/sportPNG3.png";
import ActionButton from "../component/ActionButton";

type props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum deserunt autem ex quidem aperiam maxime",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "Pet-Friendly Environment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum deserunt autem ex quidem aperiam maxime",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum deserunt autem ex quidem aperiam maxime",
  },
];

function Benefits({ setSelectedPage }: props) {
  return (
    <section id="benefits" className="w-5/6 min-h-full mx-auto py-16">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.BENEFITS)}
      >
        <motion.div
          className="my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>more than just game</HText>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            perspiciatis laboriosam soluta repellat ducimus rerum quo non
            ratione aliquam debitis tempore enim, vitae neque unde id tenetur
            assumenda repellendus. Hic!
          </p>
        </motion.div>
        <motion.div
          className="md:flex items-center justify-between mt-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          // variants={}
        >
          {benefits.map((item) => (
            <BenefitComponent
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-4 items-center justify-between gap-20 md:mt-16 md:flex">
          <div className="w-full md:w-3/6">
            <img src={benefitImg} alt="" />
          </div>
          <div className="w-full md:w-3/6">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="absolute -top-25 -left-15 z-[1] rotate-[-38deg]">
                <svg
                  width="140"
                  height="80"
                  viewBox="0 0 120 60"
                  fill="none"
                  xmlns="http://w3.org"
                >
                  <path
                    d="M5 20C30 0 45 40 70 20C95 0 110 40 115 "
                    stroke="#FFC107"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 33C30 13 45 53 70 33C95 13 110 53 115 "
                    stroke="#FFC107"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 46C30 26 45 66 70 46C95 26 110 66 115 "
                    stroke="#FFC107"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <HText>
                MILLONS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-primary-500">FIT</span>
              </HText>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="py-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                dolorem quia deleniti a ullam pariatur omnis reprehenderit
                maiores quas veritatis. Ipsum, tempore velit. Ut, eligendi qui
                earum fuga blanditiis officia?
              </p>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam ad nulla assumenda deleniti ut harum non obcaecati
                fugit odit rem, modi culpa ipsam unde consectetur? Debitis omnis
                minima voluptatibus recusandae?
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="absolute -bottom-6 right-40 z-[-1] text-yellow-500 ">
                <SparklesIcon className="w-30 h-30" />
              </div>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
