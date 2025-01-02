import { FaLocationArrow } from "react-icons/fa6";
import { AnimatedTooltip } from "./ui/animated-tooltip";

import { projects } from "../data";
import { PinContainer } from "./ui/Pin";

function Projects() {
  return (
    <div className="py-20" id="projects">
    <h1 className="heading">
      A Glimpse into My{" "}
      <span className="text-purple"> Development Journey</span>
    </h1>
    <div className="flex flex-wrap items-center justify-center p-4 gap-x-8 sm:gap-x-24 gap-y-12 sm:gap-y-8 mt-10">
      {projects.map((item) => (
        <div
          className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          key={item.id}
        >
          <PinContainer title={item.title} href={item.link}>
            <div className="relative flex items-center justify-center sm:w-[570px] w-[70vw] overflow-hidden h-[20vh] sm:h-[40vh] mb-10">
              {/* Background Container */}
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{
                  backgroundColor: "#13162D",
                }}
              >
                <img
                  src="/bg.png"
                  alt="bgimg"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
              </div>
  
              {/* Floating Image */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out perspective-container sm:perspective-[800px] sm:rotate-x-[3deg] sm:rotate-y-[-1deg] sm:scale-[0.8] lg:perspective-[1200px] lg:rotate-x-[6deg] lg:rotate-y-[-2deg] lg:scale-[0.85]">
                <img
                  src={item.img}
                  alt="cover"
                  className="w-[90%] sm:w-auto h-[90%] sm:h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
  
            {/* Title */}
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {item.title}
            </h1>
  
            {/* Description */}
            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {item.des}
            </p>
  
            {/* Footer */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-7 mb-3">
              {/* Icons */}
              <div className="flex items-center mb-4 md:mb-0">
                <AnimatedTooltip items={item.iconLists} />
              </div>
  
              {/* Live Site Link */}
              <div className="flex justify-center items-center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-sm md:text-base lg:text-xl text-purple"
                >
                  Check Live Site
                </a>
                <FaLocationArrow className="ml-3 text-purple" />
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default Projects;
