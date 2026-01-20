"use client";

import React from "react";
// import CompareText from "./CompareText"
import ElectricBorder from "../../../components/ElectricBorder"
import MagicBento from "../../../components/MagicBento"

const TracingBeamDemo = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-2xl mx-auto antialiased relative">
        {/* About Me Section */}
        <div className="mb-16">
          <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-6">
            About Me
          </h2>

          <p className="text-2xl md:text-3xl font-semibold mb-6 text-black dark:text-white">
            Hi, I'm Harsh 👋
          </p>

          <div className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          
            <div className="space-y-4">
              <p className="text-lg font-medium">
                I'm a passionate MERN Stack Developer who loves building modern,
                scalable, and user-friendly web applications.
              </p>
              <p>
                I enjoy turning complex problems into simple, beautiful solutions.
                My focus is always on writing clean code, creating smooth user
                experiences, and learning new technologies.
              </p>
            </div>
            {/* <div className="w-full h-80 bg-[red] flex gap-6 flex-wrap">
   <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              alt="about image"
              className="rounded-lg  object-cover w-[48%] h-64 md:h-80"
            />

           
            </div> */}
           
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16" style={{ marginTop: "4rem" }}>
          <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-6">
            Skills
          </h2>

          <p className="text-2xl md:text-3xl font-semibold mb-6 text-black dark:text-white">
            What I Do
          </p>

          <div className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
           
            
    
            
            <div className="space-y-4">
              <p className="text-lg font-medium">
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
             <div className="w-full h-166  flex gap-6 flex-wrap">

            
            
            <MagicBento 
  // textAutoHide={true}
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
/>
            </div>
          </div>
        </div>

      

        {/* Personal Section */}
        <div className="mb-16" style={{ marginTop: "4rem" }}>
          <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-6">
            Personal
          </h2>

          <p className="text-2xl md:text-3xl font-semibold mb-6 text-black dark:text-white">
            Beyond Coding
          </p>

          <div className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          
            <div className="space-y-4">
              <p className="text-lg font-medium">
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
              <img
              src="/assets/laptop.png"
              alt="personal image"
              className="rounded-lg mb-8 object-cover w-full h-64 md:h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracingBeamDemo;