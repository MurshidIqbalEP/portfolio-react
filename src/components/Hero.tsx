
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { GiQuillInk } from "react-icons/gi";
import Spline from "@splinetool/react-spline";

function Hero() {
  const name = "Murshid Iqbal Ep";
  const words = "Crafting Seamless Web Applications with MERN";
  const splineUrl = import.meta.env.VITE_SPLINE_URL as string;

  const handleClick = () => {
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pb-20 pt-36 " id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 "
          fill="white"
        />
        <Spotlight
          className="top-30 left-full  h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3]  flex items-center justify-center absolute top-0 left-0 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center  relative  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col gap-2 items-center justify-center">
          <TextGenerateEffect
            className="uppercase tracking-widest text-3xl sm:text-6xl font-bold text-center text-blue-100 max-w-100 "
            words={name}
          />

          <div className="flex items-center justify-center gap-1">
            <TextGenerateEffect className="text-sm sm:text-xl" words={words} />
          </div>

          <div className="flex flex-col items-center justify-center w-full max-w-5xl mb-10">
            <div className="w-full h-96 mb-0">
              <Spline scene={splineUrl} />
            </div>

            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              onClick={handleClick}
            >
              <span>Show my works</span>
              <GiQuillInk />
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
