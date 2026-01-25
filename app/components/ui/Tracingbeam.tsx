"use client";

import React from "react";
import ElectricBorder from "../../../components/ElectricBorder";
import MagicBento from "../../../components/MagicBento";

const TracingBeamDemo = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 sm:py-16 md:py-20 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12">
      <div className="max-w-2xl mx-auto antialiased relative w-full">
        {/* About Me Section */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h2 className="bg-black text-white rounded-full text-xs sm:text-sm w-fit px-3 sm:px-4 py-1 mb-4 sm:mb-5 md:mb-6">
            About Me
          </h2>

          <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6 text-black dark:text-white">
            Hi, I'm Harsh 👋
          </p>

          <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed sm:leading-relaxed space-y-3 sm:space-y-4">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg md:text-xl font-medium">
                I'm a passionate MERN Stack Developer who loves building modern,
                scalable, and user-friendly web applications.
              </p>
              <p>
                I enjoy turning complex problems into simple, beautiful solutions.
                My focus is always on writing clean code, creating smooth user
                experiences, and learning new technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12 sm:mb-14 md:mb-16 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <h2 className="bg-black text-white rounded-full text-xs sm:text-sm w-fit px-3 sm:px-4 py-1 mb-4 sm:mb-5 md:mb-6">
            Skills
          </h2>

          <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6 text-black dark:text-white">
            What I Do
          </p>

          <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed sm:leading-relaxed space-y-3 sm:space-y-4">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg md:text-xl font-medium">
                I specialize in full-stack web development using modern JavaScript
                frameworks and tools.
              </p>
              <p>
                On the frontend, I work with React, Next.js, Tailwind CSS, and
                Framer Motion to build responsive and interactive interfaces.
              </p>
              <p>
                On the backend, I use Node.js, Express, MongoDB, and REST APIs to
                create secure and scalable systems.
              </p>
            </div>
            
            {/* MagicBento container - same width as text */}
            <div className="w-full mt-6 sm:mt-8 md:mt-10">
              <div className="w-full">
                <MagicBento 
                  enableStars
                  enableSpotlight
                  enableBorderGlow={true}
                  enableTilt={false}
                  enableMagnetism={false}
                  clickEffect
                  spotlightRadius={400}
                  particleCount={12}
                  glowColor="132, 0, 255"
                  disableAnimations={false}
                  // className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Personal Section */}
        <div className="mb-12 sm:mb-14 md:mb-16 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <h2 className="bg-black text-white rounded-full text-xs sm:text-sm w-fit px-3 sm:px-4 py-1 mb-4 sm:mb-5 md:mb-6">
            Personal
          </h2>

          <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6 text-black dark:text-white">
            Beyond Coding
          </p>

          <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed sm:leading-relaxed space-y-3 sm:space-y-4">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg md:text-xl font-medium">
                When I'm not coding, I enjoy exploring new tech trends and improving
                my problem-solving skills.
              </p>
              <p>
                I'm always excited to collaborate on interesting projects, learn from
                others, and contribute to meaningful work.
              </p>
              <p>
                If you're looking for someone who's dedicated, curious, and
                growth-oriented — let's connect!
              </p>
            </div>
            
            <div className="w-full mt-4 sm:mt-6 md:mt-8">
              <img
                src="/assets/laptop.png"
                alt="personal image"
                className="rounded-lg object-cover w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracingBeamDemo;