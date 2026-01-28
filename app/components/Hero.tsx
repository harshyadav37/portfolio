"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TiltedCard from "./ui/TiltedCard";
import RotatingText from "./ui/RotatingText";
import { ResumeModal } from "./ui/ResumeModal";

export const Hero: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full max-w-2xl mx-auto lg:mx-0"
        >
          <span className="text-cyan-400 text-xs sm:text-sm tracking-widest uppercase">
            Hello, I'm
          </span>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Harsh <span className="text-cyan-400">Yadav</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-200 flex flex-wrap items-center gap-2 sm:gap-3">
            I am a
            <RotatingText
              texts={[
                "Full Stack Developer",
                "React Developer",
                "MERN Engineer",
                "UI Enthusiast",
              ]}
              mainClassName="
                inline-flex w-fit
                px-2 sm:px-3 md:px-4
                py-1 sm:py-1.5
                bg-cyan-300 text-black
                rounded-lg font-semibold
                text-sm sm:text-base md:text-lg lg:text-xl
              "
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden"
              splitBy="characters"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2200}
              animatePresenceMode="wait"
              animatePresenceInitial={false}
            />
          </h2>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
            I build modern, high-performance web applications with clean UI,
            smooth animations, and scalable backend systems.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-6 sm:px-8 
                  py-3 sm:py-4 
                  text-sm sm:text-base md:text-lg
                  bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400
                  hover:shadow-[0_0_30px_rgba(96,165,250,0.6)]
                  text-white font-bold font-medium rounded-lg
                  transition-all duration-300 
                  flex items-center gap-2 justify-center
                  w-[50%] xs:w-auto
                "
              >
                View Projects <ArrowRight size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsResumeModalOpen(true)}
              className="
                px-6 sm:px-8 
                py-3 sm:py-4 
                text-sm sm:text-base md:text-lg
                bg-slate-700 hover:bg-slate-600
                text-white font-medium rounded-lg
                transition-all duration-300 
                flex items-center gap-2 justify-center
                w-[50%] xs:w-auto
              "
            >
              Resume <ArrowRight size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT: TILTED IMAGE - Hidden on mobile, visible from lg screen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="hidden lg:flex justify-center lg:justify-end"
        >
          <TiltedCard
            rotateAmplitude={30}
            scaleOnHover={1.2}
            // className="w-full max-w-md xl:max-w-lg"
          />
        </motion.div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </section>
  );
};
