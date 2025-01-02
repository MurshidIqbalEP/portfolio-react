
import { useState } from "react";
import { cn } from "../../lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import animationData from "../../data/confetti.json";
import { HoverBorderGradient } from "./hover-border-gradient";
import { FaCopy } from "react-icons/fa";
import TiltedScroll from "./tiltedScroll";


import Player from "lottie-react";

const LottieWrapper = ({ animationData, loop }: { animationData: any; loop: boolean }) => (
  <Player
    autoplay
    loop={loop}
    animationData={animationData}
    style={{
      height: "200px",
      width: "400px",
    }}
  />
);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript", "Javascript"];
  const rightLists = ["React", "Next", "MongoDB", "Tailwind"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "murshidm2x@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        id === 2 ? "p-0" : "",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center "} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
            {title}
          </div>

          {id === 2 && <TiltedScroll />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 5 && (
            <div className="flex justify-start items-center space-x-4 mt-5">
              <a
                href="https://www.instagram.com/_mursh_d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-transform"
              >
                <img src="/insta.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/MurshidIqbalEP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-transform"
              >
                <img src="/git.svg" alt="Github" className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/murshidiqbalep/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-transform"
              >
                <img src="/link.svg" alt="Linkedin" className="w-8 h-8" />
              </a>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative flex justify-center items-center">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                <LottieWrapper animationData={animationData} loop={copied} />
              </div>

              <HoverBorderGradient
                containerClassName="rounded-100px"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                onClick={handleCopy}
              >
                <FaCopy />
                <span>copy Email</span>
              </HoverBorderGradient>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
