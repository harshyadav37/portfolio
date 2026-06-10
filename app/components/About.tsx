"use client";
import React from "react";

import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import schoolboy from "../../public/assets/schoolboy.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      {/* <div className="flex flex-col-reverse md:flex-row items-center justify-between"> */}
      <div className="flex w-full flex-col-reverse  md:flex-row items-center justify-around md:gap-20 lg:gap-32">
              {/* left side */}
        <div className="md:w-1/2 text-center  md:text-left mt-8 md:mt-0">
          {/* greeting */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 text-white leading-tight">
            Hi, I'm
          </h2>

          {/* name */}
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
            Harsh <span className="text-[#8245ec]">Yadav</span>
          </h3>

          {/* skills with typing effect */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4 leading-tight">
            <span className="text-white">I am a </span>
               <TypeAnimation className=""
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "MERN Engineer",
                  2000,
                  "UI Enthusiast",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                 
              />

       
          </h1>

          {/* about me paragraph */}
          <p className="text-gray-300 text-base sm:text-lg md:text-lg lg:text-2xl mb-10 mt-8 leading-relaxed">
            I am a passionate full-stack developer with experience in building modern web applications. I love creating intuitive user interfaces and solving complex problems.
          </p>
          {/* call to action button */}
          <a
            href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Contact Me
          </a>
        </div>
        {/* right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
             <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={schoolboy.src}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;



// import React from "react";
// import Aboutpage from "./ui/Aboutoage";
// import TracingBeamDemo from "./ui/Tracingbeam";

// const About = () => {
//   return (
//     <section id="about" className="relative">
//       <TracingBeamDemo />

//       {/* Aboutpage hidden on mobile, visible on md+ */}
//       <div className="relative -mt-4 hidden md:block">
//         <Aboutpage />
//       </div>
//     </section>
//   );
// };

// export default About;
