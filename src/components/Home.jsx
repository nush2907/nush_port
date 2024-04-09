import React from "react";
import { useSpring, animated } from "react-spring";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/final.png";

const Home = () => {
  const textSpring = useSpring({
    opacity: 1,
    transform: "translateX(0%) rotate(0deg)",
    from: { opacity: 0, transform: "translateX(50%) rotate(45deg)" },
    delay: 1000,
  });

  const imageSpring = useSpring({
    opacity: 1,
    transform: "translateX(10%) rotate(0deg)",
    from: { opacity: 0, transform: "translateX(50%) rotate(45deg)" },
    delay: 1000,
  });

  return (
     <div id = "home">
    <div className="bg-gradient-to-b from-white via-white to-blue-300 min-h-screen flex items-center">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row p-8 items-center">
        <div className="flex flex-col justify-center w-full md:w-1/2 mt-12 md:mt-0">
          <animated.h2
            className="text-4xl sm:text-7xl font-bold text-black text-center mb-4"
            style={textSpring}
          >
            Full Stack Developer & AI/ML Researcher.
          </animated.h2>
          <animated.p
            className="text-gray-500 max-w-md text-center mb-4"
            style={textSpring}
          >
            Pre-final year Computer Science student who thrives to make her ideas turn into reality. Get to know me!
          </animated.p>
        </div>

        <animated.div style={imageSpring} className="w-full md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full"
          />
        </animated.div>
      </div>
    </div>
  </div>
  );
};

export default Home;
