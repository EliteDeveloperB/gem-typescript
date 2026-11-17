import useMediaQuery from "../hook/useMediaQuery";
import { SelectedPage } from "../services/types";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import ActionButton from "../component/ActionButton";
import { Link } from "react-scroll";
import ImageHome from "../assets/images/sportPNG4.png";
import image1 from "../assets/images/OIP.jpg";
import image2 from "../assets/images/OIP (1).jpg";
import image3 from "../assets/images/OIP (2).jpg";

type props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-10 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.HOME)}
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      >
        <div className="mt-20 z-10 basis-3/5">
          <motion.div className="md:mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div
                className="absolute bg-gray-500 -top-100 left-0 w-full
            h-[950px] bg-cover bg-center bg-no-repeat z-0 opacity-10 hidden md:block"
                style={{
                  mask: `url(${logo}) no-repeat center / contain`,
                  WebkitMask: `url(${logo})no-repeat center / contain`,
                }}>
              </div>
              <div className="">
                <div
                  className="w-36 h-36 bg-gray-500 z-10"
                  style={{
                    mask: `url(${logo}) no-repeat center / contain`,
                    WebkitMask: `url(${logo})no-repeat center / contain`,
                  }}
                ></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque ducimus voluptatem molestias, nesciunt, numquam
                  maxime quibusdam quo sit quam officia aliquid incidunt itaque
                  ex temporibus odit repudiandae aliquam maiores perspiciatis.
                </p>
              </div>
            </div>
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
            className="flex gap-8 items-center mt-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <Link
              onClick={() => setSelectedPage(SelectedPage.CONTACTUS)}
              to={`#${SelectedPage.CONTACTUS}`}
              className="text-sm font-bold text-primary-500 underline"
            >
              <p>Learn More</p>
            </Link>
          </motion.div>
        </div>
        <div className="flex basis-2/5 justify-center mt-16 md:ml-40 md:justify-end z-10">
          <img src={ImageHome} alt="" />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="w-full bg-primary-100 py-8">
          <div className="w-5/6 mx-auto">
            <div className="w-3/5 flex justify-between items-center gap-8">
              <div className="flex-1 h-[100px]">
                <img
                  className="w-full h-full object-contain"
                  src={image1}
                  alt=""
                />
              </div>
              <div className="flex-1 h-[100px]">
                <img
                  className="w-full h-full object-contain"
                  src={image2}
                  alt=""
                />
              </div>
              <div className="flex-1 h-[100px]">
                <img
                  className="w-full h-full object-contain"
                  src={image3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
