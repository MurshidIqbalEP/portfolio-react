import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AnimatedTestimonial() {
  const testimonials = [
    {
      description:
        "JavaScript is a versatile programming language enabling interactive web, server-side, and mobile app development.",
      name: "Javascript",
      technology: "programming language",
      src: "https://res.cloudinary.com/drsh8bkaf/image/upload/v1734617261/js_zc2xxd.jpg",
    },
    {
      description:
        "TypeScript is a JavaScript superset adding static typing, improving code quality, scalability, and maintainability.",
      name: "Typescript",
      technology: "programming language",
      src: "https://res.cloudinary.com/drsh8bkaf/image/upload/v1734617946/ts_1_moqkw6.jpg",
    },
    {
      description:
        "React.js is a JavaScript library for building fast, interactive, and reusable user interface components.",
      name: "React js",
      technology: "JavaScript library",
      src: "https://res.cloudinary.com/drsh8bkaf/image/upload/v1734616589/react_1_hpz258.jpg",
    },
    {
      description:
        "Next.js is a React framework enabling server-side rendering, static generation, and optimized web application performance.",
      name: "Next js",
      technology: "React framework",
      src: "https://res.cloudinary.com/drsh8bkaf/image/upload/v1734617544/next_1_ztbx0h.jpg",
    },
    {
      description:
        "Node.js is a server-side JavaScript runtime environment for building scalable, high-performance applications.",
      name: "Node js",
      technology: "JavaScript runtime environment",
      src: "https://res.cloudinary.com/drsh8bkaf/image/upload/v1734617400/node_1_urjlzo.jpg",
    },
    {
      description:
        "Express.js is a fast, unopinionated Node.js framework for developing web applications and RESTful APIs.",
      name: "Express js",
      technology: "Node.js framework ",
      src: "https://res.cloudinary.com/drsh8bkaf/image/upload/v1734616589/express_1_tqxksc.jpg",
    },
    {
      description:
        "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents for scalability.",
      name: "MongoDB",
      technology: "NoSQL database",
      src: "https://res.cloudinary.com/drsh8bkaf/image/upload/v1734617779/mongodb_f0aur1.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
