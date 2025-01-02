import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { navItems } from "./data";
import { FloatingNav } from "./components/ui/floating-navbar";
import Player from "lottie-react";
import animationData from "./data/loading.json";

// Lazy-load components
const Hero = React.lazy(() => import("./components/Hero"));
const Grid = React.lazy(() => import("./components/Grid"));
const AnimatedTestimonial = React.lazy(() => import("./components/Testimonial"));
const Projects = React.lazy(() => import("./components/Projects"));

const LottieWrapper = ({ animationData, loop }: { animationData: any; loop: boolean }) => (
  <Player
    autoplay
    loop={loop}
    animationData={animationData}
    style={{
      height: "250px",
      width: "250px",
    }}
  />
);

function App() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Router>
          <FloatingNav navItems={navItems} />
          <Suspense
            fallback={
              <div className=" flex justify-center items-center h-screen text-white">
                <LottieWrapper animationData={animationData} loop={true} />
              </div>
            }
          >
            <Hero />
            <Grid />
            <AnimatedTestimonial />
            <Projects />
          </Suspense>
        </Router>
      </div>
    </main>
  );
}

export default App;
