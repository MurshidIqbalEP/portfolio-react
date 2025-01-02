
import {
  FaLaptop,
  FaLightbulb,
  FaUsers,
  FaTrophy,
  FaRocket,
  FaBrain,
  FaCode,
  FaGlobe,
} from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";
import { MdBook } from "react-icons/md";

const TiltedScroll = () => {
  const items = [
    { id: "1", text: "Creative Thinker", icon: <FaLightbulb /> },
    { id: "2", text: "Web Developer", icon: <FaLaptop /> },
    { id: "3", text: "Problem Solver", icon: <FaPuzzlePiece /> },
    { id: "4", text: "Team Player", icon: <FaUsers /> },
    { id: "5", text: "Lifelong Learner", icon: <MdBook /> },
    { id: "6", text: "Innovator", icon: <FaRocket /> },
    { id: "7", text: "Coding Enthusiast", icon: <FaCode /> },
    { id: "8", text: "Tech Explorer", icon: <FaGlobe /> },
    { id: "9", text: "Critical Thinker", icon: <FaBrain /> },
    { id: "10", text: "Achiever", icon: <FaTrophy /> },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <div
          className="relative w-full max-w-screen-lg   backdrop-blur-sm"
          style={{
            WebkitMaskImage: `linear-gradient(to right, transparent, black 5rem),
                      linear-gradient(to left, transparent, black 5rem),
                      linear-gradient(to bottom, transparent, black 5rem),
                      linear-gradient(to top, transparent, black 5rem)`,
            WebkitMaskComposite: "intersect",
          }}
        >
          <div className="mx-auto grid  ml-6 h-[150px] w-[250px] animate-skew-scroll grid-cols-2 gap-5 sm:w-[350px]">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex cursor-pointer items-center  sm:w-40  space-x-2 rounded-md border border-gray-100 px-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl dark:border-gray-800"
              >
                <div className="text-xl   text-blue-500">{item.icon}</div>
                <p className=" text-xs sm:text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiltedScroll;
