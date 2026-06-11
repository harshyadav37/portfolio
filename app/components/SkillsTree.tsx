"use client";
import React from 'react'
import {SkillsInfo} from "../../app/constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
    id='skills'
      className="py-24 pb-24 w-[100%] font-sans bg-gradient-to-b from-slate-950 via-slate-950 to-indigo-950 clip-path-custom">
        <div className="text-center mb-8">
          <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
            <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
              <p className="text-gray-400  mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
        </div>
        {/* skills */}
            <div className="flex flex-wrap justify-center px-2 gap-5 w-[90%] sm:w-[85%] md:w-[90%] lg:w-[85%] xl:w-[75%] mx-auto py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 sm:py-8 mb-10 w-[80%] sm:w-[75%] lg:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-1 sm:space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-1.5 px-1.5 sm:py-2 sm:px-2 text-center break-words"
                >
                  <img
                    src={skill.logo.src}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 break-words">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
      </section>
  )
}

export default Skills



































