"use client";

import React from "react";
import { education } from "../../app/constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Center Vertical Line */}
        <div className="absolute left-0 sm:left-1/2 top-0 h-full w-1 bg-white transform -translate-x-1/2"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0
                ? "sm:justify-start"
                : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-20">
              <img
                src={edu.img.src}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:w-[45%] p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105
              ${
                index % 2 === 0
                  ? "ml-10 sm:mr-20 sm:ml-0"
                  : "ml-10 sm:ml-20 sm:mr-0"
              }`}
            >
              {/* Header */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img.src}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>

                  <h4 className="text-sm text-gray-300">
                    {edu.school}
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Details */}
              <p className="mt-4 text-gray-400 font-bold">
                Grade: {edu.grade}
              </p>

              <p className="mt-4 text-gray-400">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;