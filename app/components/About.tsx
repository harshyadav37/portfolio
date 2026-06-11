"use client";
import React from "react";
import { useState } from "react";
import {  FiX } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import myimg from "../../public/assets/Myimg.jpeg"
import resume from "../../public/assets/Harsh_Yadav_Resume.png"

const About = () => {
  const [isopen, setIsOpen] =useState(false);

 
  return (
    <section
      id="about"
      className="py-4 px-[5vw] sm:px-[7vw] md:px-[7vw] lg:px-[10vw] xl:px-[14vw] font-sans mt-8 sm:mt-12 md:mt-16 lg:mt-24 xl:mt-32"
    >
      <div className="flex w-full flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 lg:gap-20 xl:gap-32">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-4 sm:px-0">
          {/* greeting */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 text-white leading-tight">
            Hi, I'm
          </h2>

          {/* name */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 text-white leading-tight">
            Harsh <span className="text-[#8245ec]">Yadav</span>
          </h3>

          {/* skills with typing effect */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-[#8245ec] mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
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
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 mt-6 sm:mt-8 leading-relaxed">
            I am a passionate full-stack developer with experience in building modern web applications. I love creating intuitive user interfaces and solving complex problems.
          </p>
          {/* call to action button */}
          <button
              onClick={() => setIsOpen(true)}
            className="inline-block text-white cursor-pointer py-2 px-6 sm:py-3 sm:px-8 rounded-full mt-3 sm:mt-5 text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Check My Resume
          </button>
        </div>


        {/* {popup} */}
        {isopen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center  p-4">
            <div 
              className="bg-gray-950 rounded-xl shadow-2xl w-full max-w-md mx-auto my-8 p-6 relative"
            >
             <h1 className="text-2xl font-bold text-white mb-4 text-center">
                My Resume
              </h1>
              <FiX  onClick={() => setIsOpen(false)} className="absolute hover:scale-105 top-6 right-4 font-bold text-[30px] text-[#8245ec] cursor-pointer" style={{
              
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }} />
               
              <img
                src={resume.src}
                alt="Resume"
                className="w-full h-auto rounded-lg mb-4"
              />
              <a href={resume.src} download="Harsh_Yadav_Resume.png"   className="inline-block text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full mt-3 sm:mt-5 text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
    style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
>
  Download Resume
</a>
              
            </div>
          </div>
        )}   






        {/* right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-[30rem] xl:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={myimg.src}
              alt="Harsh Yadav"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
